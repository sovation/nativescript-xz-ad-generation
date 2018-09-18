import { Observable } from "tns-core-modules/data/observable";
import { EventData } from "tns-core-modules/data/observable";
import { XzAdItem } from "../xz-ad-item";

export interface AdData extends EventData {
	title: string;
	description: string;
	mainImageUrl: string; // 画像URL
	mainImageWidth: number; // 画像幅
	mainImageHeight: number; // 画像高さ
	iconImageUrl: string; // アイコンイメージURL
	iconImageWidth: number;
	iconImageHeight: number;
	ctaText: string; // Call to Action文字列
	linkUrl: string; // クリック時のリンク先URL
	sponsor: string; // 広告主情報
}

export interface NativeAdData extends AdData {
}

export abstract class XzAdControllerBase extends Observable {

	protected adItem: XzAdItem;

	constructor(adItem: XzAdItem){
		super();
		this.adItem = adItem;
	}

}
