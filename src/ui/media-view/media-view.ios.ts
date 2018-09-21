import { MediaViewBase } from "./media-view-base";
import { layout } from "tns-core-modules/utils/utils";

/**
 * 動画広告が全く出なかったため、いったん使わないことになったため、実装は途中です
 */
export class MediaView extends MediaViewBase {

	private _mediaView: ADGMediaView;

	constructor(){
		super();
	}

	createNativeView(): Object {
		this._mediaView = ADGMediaView.alloc().initWithFrame(CGRectMake(0,0, 320, 250));
		return this._mediaView;
	}

	initNativeView(){
	}

	disposeNativeView(){
		this._mediaView = null;
	}

	loadNativeAd(){
		console.log("start loading mediaview!");

		this.width = 200;
		this.height = 100;

		this._mediaView.nativeAd = this._nativeAd;
		this._mediaView.fullscreenVideoPlayerEnabled = true;
		this._mediaView.load();
	}

	public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number) {
		const width = layout.getMeasureSpecSize(widthMeasureSpec);
		const height = layout.getMeasureSpecSize(heightMeasureSpec);
		this.setMeasuredDimension(width, height);
	}

}
