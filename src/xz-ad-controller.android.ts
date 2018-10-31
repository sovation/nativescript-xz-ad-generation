import { XzAdControllerBase } from "./xz-ad-controller-base";
import { android } from "tns-core-modules/application";
import { EventData } from "tns-core-modules/data/observable";
import { NativeAdData } from "./xz-ad-common";
import {View} from "tns-core-modules/ui/core/view";
import {screen} from "tns-core-modules/platform";
import mainScreen = screen.mainScreen;

declare var com: any;

// Android用AdController
export class XzAdController extends XzAdControllerBase {

	private _adg: any;
	private _listener: any;
	private _tapTargetView: WeakRef<android.view.View>;

	/**
	 * 広告のリスナーを生成して返す
	 *
	 * 関数でラップしているのは、Android V8スナップショット機能を使って本番ビルドしたときに、
	 * Androidのネイティブのクラスの継承クラスがうまく動かない問題を解決するため
	 * https://docs.nativescript.org/plugins/ui-plugin-custom
	 */
	private getAdListener(): any {
		class AdListener extends (com.socdm.d.adgeneration.ADGListener as { new(): any; }) {

			private _owner: WeakRef<XzAdController>;

			onReceiveAd(o: any) {
				if( o instanceof com.socdm.d.adgeneration.nativead.ADGNativeAd ){
					let ad = o;
					let controller = this._owner.get();
					if( controller ){
						controller.onReceiveAd(ad);
					}
				}
			}

			onFailedToReceiveAd(code: number){
				console.log("fail loading ad!");
				let controller = this._owner.get();
				if( controller ){
					controller.onFailed();
				}
			}

			setOwnerAdController(owner: WeakRef<XzAdController>){
				this._owner = owner;
			}

			constructor(){
				super();
				return global.__native(this);
			}
		}

		let listener = new AdListener();
		listener.setOwnerAdController(new WeakRef<XzAdController>(this));

		return listener;
	}

	/**
	 * Init NativeAd with View
	 * @param parentView
	 */
	public initNativeAd(parentView: View): this {
		if( parentView == null ){
			throw new Error("no parent view!");
		}

		let targetView = parentView.android as android.view.View;

		this._tapTargetView = new WeakRef<android.view.View>( targetView );
		this._adg = new com.socdm.d.adgeneration.ADG(android.context);


		this._adg.setLocationId(""+ this.adItem.locationId);

		// 広告の表示サイズを計算
		let adWidth = mainScreen.widthDIPs;
		// 余白の値が数値なら、数値に変換、数値出ない場合（"auto"など)は0として扱う
		let pl = isNaN(+parentView.style.paddingLeft) ? 0 : +parentView.style.paddingLeft;
		let pr = isNaN(+parentView.style.paddingRight) ? 0 : +parentView.style.paddingRight;
		adWidth -= (pl+pr); // 余白を引いたサイズを広告領域の幅とする
		let adHeight = (this.adItem.height / this.adItem.width) * adWidth;

		// フリーサイズとしてバナーのサイズ設定
		let adSize = com.socdm.d.adgeneration.ADG.AdFrameSize.valueOf("FREE");
		this._adg.setAdFrameSize(adSize.setSize(adWidth, adHeight));
		this._adg.setUsePartsResponse(true);
		this._adg.setInformationIconViewDefault(false);
		this._adg.setAdListener(this.getAdListener());

		//// HTMLテンプレートを使用したネイティブ広告を表示のためにはaddViewする必要があります
		(<any>targetView).addView(this._adg);

		this._adg.start();

		return this;
	}

	// Viewを指定して初期化
	// Androidではview=com.socdm.d.adgeneration.ADG のインスタンスになります
	public initWithView(view: any, viewHeight: number, viewWidth: number, scale: number): this {
		// バナーのみサポート
		if( this.adItem.type !== "banner" ){
			return null;
		}

		this._adg = view;

		this._adg.setLocationId(""+ this.adItem.locationId);

		// フリーサイズとしてバナーのサイズ設定
		let adSize = com.socdm.d.adgeneration.ADG.AdFrameSize.valueOf("FREE");
		this._adg.setAdFrameSize(adSize.setSize(viewWidth, viewHeight));
		this._adg.setAdScale(scale);

		this._listener = this.getAdListener();
		this._adg.setAdListener(this._listener);

		this._adg.start();
		return this;
	}

	public start(){
		if( this._adg ){
			this._adg.start();
		}
	}

	public resumeAd() {
		// Androidでは不要
	}

	public dispose(){
		this._adg = null;
		this._listener = null;
	}

	/**
	 * ネイティブAdを受信したとき
	 * @param ad
	 */
	public onReceiveAd(ad: any){
		let data = <NativeAdData>{
			object: null,
			eventName: "receiveNativeAd",
			locationId: this.adItem.locationId
		};

		if( ad.getTitle() != null ){
			data.title = ad.getTitle().getText();
		}
		if( ad.getMainImage() != null ){
			data.mainImageUrl = ad.getMainImage().getUrl();
		}
		if( ad.getIconImage() != null ){
			data.iconImageUrl = ad.getIconImage().getUrl();
		}
		if( ad.getDesc() != null ){
			data.description = ad.getDesc().getValue();
		}
		if( ad.getSponsored() != null ){
			data.sponsor = ad.getSponsored().getValue();
		}
		data.nativeAd = ad;

		// クリックイベント
		if( this._tapTargetView.get() ){
			let targetView = this._tapTargetView.get();
			ad.setClickEvent(targetView.getContext(), targetView, null);
		}

		this.notify(data);
	}

	// アドの受信失敗時
	public onFailed(){
		this.notify(<EventData>{
			eventName: "fail",
			object: null
		});
	}

}
