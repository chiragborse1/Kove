import { n as describeImagesWithModel, t as describeImageWithModel } from "./image-runtime-D2eFRd_C.js";
import "./media-understanding--x6xKNQK.js";
//#region extensions/zai/media-understanding-provider.ts
const zaiMediaUnderstandingProvider = {
	id: "zai",
	capabilities: ["image"],
	describeImage: describeImageWithModel,
	describeImages: describeImagesWithModel
};
//#endregion
export { zaiMediaUnderstandingProvider as t };
