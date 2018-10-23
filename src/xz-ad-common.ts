import { EventData } from "tns-core-modules/data/observable";

export type XzAdType = "banner" | "native";

export interface XzAdItem {
	slotId: number;
	enabled: boolean;
	locationId: number;
	locationIdIOS: number;
	locationIdAndroid: number;
	locationIdIOS_Global?: number;
	locationIdAndroid_Global?: number;
	type: XzAdType;
	width?: number; // バナーのみ
	height?: number; // バナーのみ
}

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
	sponsor: string; // 広告主情報,
	locationId: number;
}

export interface NativeAdData extends AdData {
	nativeAd?: any; // ネイティブ側で返されたAdDataオブジェクト
}
