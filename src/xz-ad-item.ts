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
