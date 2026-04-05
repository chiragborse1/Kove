import { n as describeImagesWithModel, t as describeImageWithModel } from "./image-runtime-D2eFRd_C.js";
import "./media-understanding--x6xKNQK.js";
//#region extensions/openrouter/media-understanding-provider.ts
const openrouterMediaUnderstandingProvider = {
	id: "openrouter",
	capabilities: ["image"],
	describeImage: describeImageWithModel,
	describeImages: describeImagesWithModel
};
//#endregion
export { openrouterMediaUnderstandingProvider as t };
