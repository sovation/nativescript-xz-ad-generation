import { Observable } from "tns-core-modules/data/observable";
import { XzAdItem } from "../xz-ad-item";

export abstract class XzAdControllerBase extends Observable {
	constructor(adItem: XzAdItem);
}

export class XzAdController extends XzAdControllerBase {
	init(): this;
	initWithView(view: any, viewHeight: number, viewWidth: number, scale: number): this;
	resumeAd(): void;
	dispose(): void;
}
