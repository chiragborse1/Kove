import {
  approveChannelPairingCode,
  listChannelPairingRequests,
  rejectChannelPairingCode,
} from "../../pairing/pairing-store.js";
import {
  ErrorCodes,
  errorShape,
  formatValidationErrors,
  type PairingApproveParams,
  type PairingListParams,
  type PairingRejectParams,
  validatePairingApproveParams,
  validatePairingListParams,
  validatePairingRejectParams,
} from "../protocol/index.js";
import type { GatewayRequestHandlers } from "./types.js";

export const pairingHandlers: GatewayRequestHandlers = {
  "pairing.list": async ({ params, respond }) => {
    if (!validatePairingListParams(params)) {
      respond(
        false,
        undefined,
        errorShape(
          ErrorCodes.INVALID_REQUEST,
          `invalid pairing.list params: ${formatValidationErrors(validatePairingListParams.errors)}`,
        ),
      );
      return;
    }
    const { channel, accountId } = params as PairingListParams;
    const requests = await listChannelPairingRequests(channel, process.env, accountId);
    respond(true, { requests }, undefined);
  },
  "pairing.approve": async ({ params, respond, context }) => {
    if (!validatePairingApproveParams(params)) {
      respond(
        false,
        undefined,
        errorShape(
          ErrorCodes.INVALID_REQUEST,
          `invalid pairing.approve params: ${formatValidationErrors(validatePairingApproveParams.errors)}`,
        ),
      );
      return;
    }
    const { channel, code, accountId } = params as PairingApproveParams;
    const approved = await approveChannelPairingCode({ channel, code, accountId });
    if (!approved) {
      respond(false, undefined, errorShape(ErrorCodes.INVALID_REQUEST, "unknown pairing code"));
      return;
    }
    context.logGateway.info(`channel pairing approved channel=${channel} id=${approved.id}`);
    respond(true, approved, undefined);
  },
  "pairing.reject": async ({ params, respond, context }) => {
    if (!validatePairingRejectParams(params)) {
      respond(
        false,
        undefined,
        errorShape(
          ErrorCodes.INVALID_REQUEST,
          `invalid pairing.reject params: ${formatValidationErrors(validatePairingRejectParams.errors)}`,
        ),
      );
      return;
    }
    const { channel, code, accountId } = params as PairingRejectParams;
    const rejected = await rejectChannelPairingCode({ channel, code, accountId });
    if (!rejected) {
      respond(false, undefined, errorShape(ErrorCodes.INVALID_REQUEST, "unknown pairing code"));
      return;
    }
    context.logGateway.info(`channel pairing rejected channel=${channel} id=${rejected.id}`);
    respond(true, rejected, undefined);
  },
};