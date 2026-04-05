import fsSync from "node:fs";
import path from "node:path";
import { tmpdir } from "node:os";
//#region src/infra/tmp-openclaw-dir.ts
const POSIX_OPENCLAW_TMP_DIR = "/tmp/openclaw";
const POSIX_KOVA_TMP_DIR = "/tmp/kova";
const TMP_DIR_ACCESS_MODE = fsSync.constants.W_OK | fsSync.constants.X_OK;
function isNodeErrorWithCode(err, code) {
	return typeof err === "object" && err !== null && "code" in err && err.code === code;
}
function resolvePreferredOpenClawTmpDir(options = {}) {
	const accessSync = options.accessSync ?? fsSync.accessSync;
	const chmodSync = options.chmodSync ?? fsSync.chmodSync;
	const lstatSync = options.lstatSync ?? fsSync.lstatSync;
	const mkdirSync = options.mkdirSync ?? fsSync.mkdirSync;
	const warn = options.warn ?? ((message) => console.warn(message));
	const getuid = options.getuid ?? (() => {
		try {
			return typeof process.getuid === "function" ? process.getuid() : void 0;
		} catch {
			return;
		}
	});
	const tmpdir$1 = typeof options.tmpdir === "function" ? options.tmpdir : tmpdir;
	const uid = getuid();
	const isSecureDirForUser = (st) => {
		if (uid === void 0) return true;
		if (typeof st.uid === "number" && st.uid !== uid) return false;
		if (typeof st.mode === "number" && (st.mode & 18) !== 0) return false;
		return true;
	};
	const fallback = () => {
		const base = tmpdir$1();
		const suffix = uid === void 0 ? "kova" : `kova-${uid}`;
		return path.join(base, suffix);
	};
	const isTrustedTmpDir = (st) => {
		return st.isDirectory() && !st.isSymbolicLink() && isSecureDirForUser(st);
	};
	const resolveDirState = (candidatePath) => {
		try {
			if (!isTrustedTmpDir(lstatSync(candidatePath))) return "invalid";
			accessSync(candidatePath, TMP_DIR_ACCESS_MODE);
			return "available";
		} catch (err) {
			if (isNodeErrorWithCode(err, "ENOENT")) return "missing";
			return "invalid";
		}
	};
	const tryRepairWritableBits = (candidatePath) => {
		try {
			const st = lstatSync(candidatePath);
			if (!st.isDirectory() || st.isSymbolicLink()) return false;
			if (uid !== void 0 && typeof st.uid === "number" && st.uid !== uid) return false;
			if (typeof st.mode !== "number" || (st.mode & 18) === 0) return false;
			chmodSync(candidatePath, 448);
			warn(`[kova] tightened permissions on temp dir: ${candidatePath}`);
			return resolveDirState(candidatePath) === "available";
		} catch {
			return false;
		}
	};
	const ensureTrustedFallbackDir = () => {
		const fallbackPath = fallback();
		const state = resolveDirState(fallbackPath);
		if (state === "available") return fallbackPath;
		if (state === "invalid") {
			if (tryRepairWritableBits(fallbackPath)) return fallbackPath;
			throw new Error(`Unsafe fallback Kova temp dir: ${fallbackPath}`);
		}
		try {
			mkdirSync(fallbackPath, {
				recursive: true,
				mode: 448
			});
			chmodSync(fallbackPath, 448);
		} catch {
			throw new Error(`Unable to create fallback Kova temp dir: ${fallbackPath}`);
		}
		if (resolveDirState(fallbackPath) !== "available" && !tryRepairWritableBits(fallbackPath)) throw new Error(`Unsafe fallback Kova temp dir: ${fallbackPath}`);
		return fallbackPath;
	};
	const existingPreferredState = resolveDirState(POSIX_KOVA_TMP_DIR);
	if (existingPreferredState === "available") return POSIX_KOVA_TMP_DIR;
	if (existingPreferredState === "invalid") {
		if (tryRepairWritableBits("/tmp/kova")) return POSIX_KOVA_TMP_DIR;
		return ensureTrustedFallbackDir();
	}
	try {
		accessSync("/tmp", TMP_DIR_ACCESS_MODE);
		mkdirSync(POSIX_KOVA_TMP_DIR, {
			recursive: true,
			mode: 448
		});
		chmodSync(POSIX_KOVA_TMP_DIR, 448);
		if (resolveDirState("/tmp/kova") !== "available" && !tryRepairWritableBits("/tmp/kova")) return ensureTrustedFallbackDir();
		return POSIX_KOVA_TMP_DIR;
	} catch {
		return ensureTrustedFallbackDir();
	}
}
function ensureKovaTmpSymlinkSync() {
	if (resolvePreferredOpenClawTmpDir() !== "/tmp/kova") return;
	try {
		const legacyStat = fsSync.lstatSync(POSIX_OPENCLAW_TMP_DIR);
		if (legacyStat.isDirectory() || legacyStat.isSymbolicLink()) return;
	} catch {}
	try {
		fsSync.symlinkSync(POSIX_KOVA_TMP_DIR, POSIX_OPENCLAW_TMP_DIR, process.platform === "win32" ? "junction" : "dir");
	} catch {}
}
function toKovaDisplayLogPath(filePath) {
	return filePath.replace(/^\/tmp\/openclaw(?=\/|$)/, POSIX_KOVA_TMP_DIR).replace(/([\\/])openclaw(?=(?:-[^\\/]+)?\.log$)/, "$1kova");
}
//#endregion
export { toKovaDisplayLogPath as a, resolvePreferredOpenClawTmpDir as i, POSIX_OPENCLAW_TMP_DIR as n, ensureKovaTmpSymlinkSync as r, POSIX_KOVA_TMP_DIR as t };
