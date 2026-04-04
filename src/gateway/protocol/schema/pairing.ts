import { Type } from "@sinclair/typebox";
import { NonEmptyString } from "./primitives.js";

export const PairingListParamsSchema = Type.Object(
  {
    channel: NonEmptyString,
    accountId: Type.Optional(NonEmptyString),
  },
  { additionalProperties: false },
);

export const PairingApproveParamsSchema = Type.Object(
  {
    channel: NonEmptyString,
    code: NonEmptyString,
    accountId: Type.Optional(NonEmptyString),
  },
  { additionalProperties: false },
);

export const PairingRejectParamsSchema = Type.Object(
  {
    channel: NonEmptyString,
    code: NonEmptyString,
    accountId: Type.Optional(NonEmptyString),
  },
  { additionalProperties: false },
);
