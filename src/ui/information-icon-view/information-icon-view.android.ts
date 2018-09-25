import { InformationIconViewBase } from "./information-icon-view-base";

declare var com:any;

export class InformationIconView extends InformationIconViewBase {

	private _infoIconView: any;
	private _android: any;

	createNativeView(): Object {
		// このタイミングではまだ本命のビューを作成できないため、StackLayoutをダミーで追加しておく
		this._android = new org.nativescript.widgets.StackLayout(this._context);
		return this._android;
	}

	initNativeView(){
	}

	disposeNativeView(){
		this._infoIconView = null;
		this._android = null;
	}

	loadNativeAd(){
		// すでにInfoIconViewを追加済の場合
		if( this._infoIconView ){
			// 既存のビューを消す
			this._android.removeView(this._infoIconView);
		}
		// StackLayoutにInfoアイコンを追加する
		this._infoIconView = new com.socdm.d.adgeneration.nativead.ADGInformationIconView(this._context, this._nativeAd);
		this._android.addView(this._infoIconView);
	}

}
