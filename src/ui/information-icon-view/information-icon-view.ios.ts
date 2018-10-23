import { layout } from "tns-core-modules/utils/utils";
import { InformationIconViewBase } from "./information-icon-view-base";

export class InformationIconView extends InformationIconViewBase {

	private _infoIconView: ADGInformationIconView;
	private _ios: UIView;

	createNativeView(): Object {
		let uiview: UIView = UIView.alloc().initWithFrame(CGRectMake(0,0,35, 15));
		uiview.contentMode = UIViewContentMode.ScaleAspectFit;
		this._ios = uiview;
		return this._ios;
	}

	initNativeView(){
	}

	disposeNativeView(){
		this._infoIconView = null;
		this._ios = null;
	}

	loadNativeAd(){

		if( this._infoIconView ){
			// すでにビューが作成済でれば、削除してから再追加
			this._infoIconView.removeFromSuperview();
		}

		this._infoIconView = ADGInformationIconView.alloc().initWithNativeAdExpandable(this._nativeAd, true);
		this._ios.addSubview(this._infoIconView);
		this._infoIconView.updateFrameFromSuperview(UIRectCorner.BottomRight);

		// 自分自身のサイズをInformationIconViewのサイズに合わせる
		this.width = this._infoIconView.frame.size.width;
		this.height = this._infoIconView.frame.size.height;
	}

}
