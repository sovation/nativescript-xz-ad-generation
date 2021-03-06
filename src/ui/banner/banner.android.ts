import { XzAdController } from "../../xz-ad-controller";
import { XzAdItem } from "../../xz-ad-common";
import { BannerBase } from "./banner-base";
import { screen } from "tns-core-modules/platform";
import mainScreen = screen.mainScreen;

declare var com:any;

// Android用広告バナービュー
export class Banner extends BannerBase {

	private _adg: any; // com.socdm.d.adgeneration.ADG のインスタンス
	private _adController: XzAdController;
	private _initialized: boolean;

	get android(){
		return this._adg;
	}

	// ネイティブViewを返す
	public createNativeView(): any {
		this._adg = new com.socdm.d.adgeneration.ADG(this._context);
		return this._adg;
	}

	// 後始末
	public disposeNativeView(){
		this._adg = null;
		if( this._adController ){
			this._adController.off("fail", this.onFail, this);
			this._adController.dispose();
		}
	}

	// アドジェネ広告の読み込み
	public loadAd() {

		if( !this.width || this.width.toString() === "auto" ){
			// 幅が未指定の場合には端末幅をセット
			this.width = mainScreen.widthDIPs;
		}

		// 画面幅に合わせて広告を拡大する
		let viewWidth = +this.width;
		let adScale = viewWidth / this._bannerWidth;
		let viewHeight = this._bannerHeight * adScale;

		this.height = viewHeight;

		this._adController = new XzAdController(<XzAdItem>{
			type: "banner",
			locationId: this._locationId,
			height: this._bannerHeight,
			width: this._bannerWidth
		}).initWithView(this._adg, viewHeight, viewWidth, adScale);

		if( this._adController ){
			this._adController.on("fail", this.onFail, this);
		}

		this._initialized = true;
	}

	// 広告読み込み失敗時
	public onFail(){
		this.width = 0;
		this.height = 0;
	}

	/**
	 * 広告の更新(初期化時、画面復帰時など)
	 */
	public updateAd(){
		// すでに初期化済みであれば、再開する
		if( this._initialized ){
			return;
		}

		if( this._locationId && this._bannerHeight && this._bannerWidth ){
			this.loadAd();
		}
	}

}
