import { n as describeImagesWithModel, t as describeImageWithModel } from "./image-runtime-D2eFRd_C.js";
import "./media-understanding--x6xKNQK.js";
//#region extensions/anthropic/media-understanding-provider.ts
const anthropicMediaUnderstandingProvider = {
	id: "anthropic",
	capabilities: ["image"],
	describeImage: describeImageWithModel,
	describeImages: describeImagesWithModel
};
//#endregion
export { anthropicMediaUnderstandingProvider as t };
