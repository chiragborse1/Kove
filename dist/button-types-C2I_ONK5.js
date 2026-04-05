import { a as normalizeInteractiveReply } from "./payload-7TfMrBfg.js";
import { t as reduceInteractiveReply } from "./interactive-ChdVowJE.js";
//#region extensions/telegram/src/button-types.ts
const TELEGRAM_INTERACTIVE_ROW_SIZE = 3;
const MAX_CALLBACK_DATA_BYTES = 64;
function fitsTelegramCallbackData(value) {
	return Buffer.byteLength(value, "utf8") <= MAX_CALLBACK_DATA_BYTES;
}
function toTelegramButtonStyle(style) {
	return style === "danger" || style === "success" || style === "primary" ? style : void 0;
}
function chunkInteractiveButtons(buttons, rows) {
	for (let i = 0; i < buttons.length; i += TELEGRAM_INTERACTIVE_ROW_SIZE) {
		const row = buttons.slice(i, i + TELEGRAM_INTERACTIVE_ROW_SIZE).filter((button) => fitsTelegramCallbackData(button.value)).map((button) => ({
			text: button.label,
			callback_data: button.value,
			style: toTelegramButtonStyle(button.style)
		}));
		if (row.length > 0) rows.push(row);
	}
}
function buildTelegramInteractiveButtons(interactive) {
	const rows = reduceInteractiveReply(interactive, [], (state, block) => {
		if (block.type === "buttons") {
			chunkInteractiveButtons(block.buttons, state);
			return state;
		}
		if (block.type === "select") chunkInteractiveButtons(block.options.map((option) => ({
			label: option.label,
			value: option.value
		})), state);
		return state;
	});
	return rows.length > 0 ? rows : void 0;
}
function resolveTelegramInlineButtons(params) {
	return params.buttons ?? buildTelegramInteractiveButtons(normalizeInteractiveReply(params.interactive));
}
//#endregion
export { resolveTelegramInlineButtons as t };
