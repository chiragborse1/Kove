import { Type } from "@sinclair/typebox";
import { NonEmptyString } from "./primitives.js";

export const ApiKeyProviderIdSchema = Type.Union([
  Type.Literal("openrouter"),
  Type.Literal("anthropic"),
  Type.Literal("openai"),
  Type.Literal("google"),
  Type.Literal("groq"),
  Type.Literal("huggingface"),
]);

export const ApiKeyProviderStatusSchema = Type.Object(
  {
    provider: ApiKeyProviderIdSchema,
    profileId: NonEmptyString,
    hasKey: Type.Boolean(),
    maskedKey: Type.Union([Type.String(), Type.Null()]),
    recommendedModel: NonEmptyString,
  },
  { additionalProperties: false },
);

export const ApiKeysProvidersGetParamsSchema = Type.Object({}, { additionalProperties: false });

export const ApiKeysSnapshotSchema = Type.Object(
  {
    providers: Type.Array(ApiKeyProviderStatusSchema),
    currentModel: NonEmptyString,
    configHash: Type.Union([Type.String(), Type.Null()]),
  },
  { additionalProperties: false },
);

export const ApiKeysProviderSetParamsSchema = Type.Object(
  {
    provider: ApiKeyProviderIdSchema,
    apiKey: Type.Optional(Type.String()),
    baseHash: Type.Optional(NonEmptyString),
  },
  { additionalProperties: false },
);

export const ApiKeysProviderTestParamsSchema = Type.Object(
  {
    provider: ApiKeyProviderIdSchema,
    apiKey: Type.Optional(Type.String()),
    model: Type.Optional(NonEmptyString),
  },
  { additionalProperties: false },
);

export const ApiKeysProviderTestResultSchema = Type.Object(
  {
    ok: Type.Boolean(),
    provider: ApiKeyProviderIdSchema,
    model: NonEmptyString,
    message: NonEmptyString,
  },
  { additionalProperties: false },
);

export const ApiKeysActiveModelSetParamsSchema = Type.Object(
  {
    provider: ApiKeyProviderIdSchema,
    model: NonEmptyString,
    baseHash: Type.Optional(NonEmptyString),
  },
  { additionalProperties: false },
);

export const ApiKeysOpenRouterGetParamsSchema = Type.Object({}, { additionalProperties: false });

export const ApiKeysOpenRouterStatusSchema = Type.Object(
  {
    provider: Type.Literal("openrouter"),
    profileId: NonEmptyString,
    hasKey: Type.Boolean(),
    maskedKey: Type.Union([Type.String(), Type.Null()]),
    model: NonEmptyString,
    configHash: Type.Union([Type.String(), Type.Null()]),
  },
  { additionalProperties: false },
);

export const ApiKeysOpenRouterSetParamsSchema = Type.Object(
  {
    apiKey: Type.Optional(Type.String()),
    model: Type.Optional(NonEmptyString),
    baseHash: Type.Optional(NonEmptyString),
  },
  { additionalProperties: false },
);

export const ApiKeysOpenRouterTestParamsSchema = Type.Object(
  {
    apiKey: Type.Optional(Type.String()),
    model: Type.Optional(NonEmptyString),
  },
  { additionalProperties: false },
);

export const ApiKeysOpenRouterTestResultSchema = Type.Object(
  {
    ok: Type.Boolean(),
    provider: Type.Literal("openrouter"),
    model: NonEmptyString,
    message: NonEmptyString,
  },
  { additionalProperties: false },
);
