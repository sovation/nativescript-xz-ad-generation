import { View, layout, Property, EventData } from "tns-core-modules/ui/core/view";
import { XzAdGBannerBase } from "./xz-ad-g-banner-base";
import { XzAdController } from "../../controller/xz-ad-controller";
import { XzAdItem } from "../../xz-ad-item";
import { screen } from "tns-core-modules/platform";
import mainScreen = screen.mainScreen;

// iOS用広告バナービュー
export class XzAdGBanner extends XzAdGBannerBase {
	private _ios;
	private _adController: XzAdController;

	private _viewWidth: number;
	private _viewHeight: number;
	private _adScale: number;

	get ios(){
		return this._ios;
	}

	public createNativeView(): any {
		let uiview: UIView = UIView.alloc().init();
		uiview.contentMode = UIViewContentMode.ScaleAspectFit;
		this._ios = uiview;
		return this._ios;
	}

	public onLoaded(){
		super.onLoaded();
		this.updateAd();
	}

	// 後始末
	public disposeNativeView(){
		this._ios = null;
		if( this._adController ){
			this._adController.off("fail", this.onFail, this);
			this._adController.dispose();
		}
	}

	public loadAd(){

		if( !this.width || this.width.toString() === "auto" ){
			// 幅が未指定の場合には端末幅をセット
			this.width = mainScreen.widthDIPs;
		}

		console.log("load ad!!!!!!!!!!!!!!!!", this._bannerHeight, this._bannerWidth, this.width);
		// 画面幅に合わせて広告を拡大する
		let viewWidth = +this.width;
		this._adScale = viewWidth / this._bannerWidth;
		this._viewHeight = this._bannerHeight * this._adScale;
		this._viewWidth = viewWidth;

		this.height = this._viewHeight;

		(<UIView>this._ios).frame = CGRectMake(0,0,this._viewWidth,this._viewHeight);

		console.log("loading adcontroller!!!!!!!!");
		this._adController = new XzAdController(<XzAdItem>{
			type: "banner",
			locationId: this._locationId,
			height: this._bannerHeight,
			width: this._bannerWidth
		}).initWithView(this._ios, this._viewHeight, this._viewWidth, this._adScale);

		if( this._adController ){
			this._adController.on("fail", this.onFail, this);
		}

	}

	// 広告受信に失敗時
	public onFail(args: EventData) {
		// 失敗時は広告領域を削除
		this.width = 0;
		this.height = 0;
	}

	// 広告をアップデートする
	protected updateAd(){
		// すでに初期化済みであれば、再開する
		if( this._adController ){
			this._adController.resumeAd();
			return;
		}

		// パラメータがすべて揃ったら広告読み込み開始
		if( this._locationId && this._bannerHeight && this._bannerWidth ){
			this.loadAd();
		}
	}

	public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number) {
		const width = layout.getMeasureSpecSize(widthMeasureSpec);
		const height = layout.getMeasureSpecSize(heightMeasureSpec);
		this.setMeasuredDimension(width, height);
	}

}

