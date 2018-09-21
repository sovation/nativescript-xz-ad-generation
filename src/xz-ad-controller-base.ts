import { Observable } from "tns-core-modules/data/observable";
import { XzAdItem } from "./xz-ad-common";

export abstract class XzAdControllerBase extends Observable {

	protected adItem: XzAdItem;

	constructor(adItem: XzAdItem){
		super();
		this.adItem = adItem;
	}

}
