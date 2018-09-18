import { NativeAdData, XzAdControllerBase } from "./xz-ad-controller-base";
import { android } from "tns-core-modules/application";
import { EventData } from "tns-core-modules/data/observable";

declare var com: any;

// Android用AdController
export class XzAdController extends XzAdControllerBase {

	private _adg: any;

	/**
	 * 広告のリスナーを生成して返す
	 *
	 * 関数でラップしているのは、Android V8スナップショット機能を使って本番ビルドしたときに、
	 * Androidのネイティブのクラスの継承クラスがうまく動かない問題を解決するため
	 * https://docs.nativescript.org/plugins/ui-plugin-custom
	 * @return {any}
	 */
	private getAdListener(): any {
		class AdListener extends (com.socdm.d.adgeneration.ADGListener as { new(): any; }) {

			private _owner: WeakRef<XzAdController>;

			onReceiveAd(o: any) {
				if( o instanceof com.socdm.d.adgeneration.nativead.ADGNativeAd ){
					let ad = o;
					let controller = this._owner.get();
					controller.onReceiveAd(ad);
				}
			}

			onFailedToReceiveAd(code){
				console.log("fail loading ad!!!!");
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

	public init(): this {

		console.log("init nativead start! ==> ", this.adItem.locationId);
		this._adg = new com.socdm.d.adgeneration.ADG(android.context);

		this._adg.setLocationId(""+ this.adItem.locationId);

		// フリーサイズとしてバナーのサイズ設定
		let adSize = com.socdm.d.adgeneration.ADG.AdFrameSize.valueOf("FREE");
		this._adg.setAdFrameSize(adSize.setSize(this.adItem.width, this.adItem.height));
		this._adg.setUsePartsResponse(true);
		this._adg.setInformationIconViewDefault(false);

		this._adg.setAdListener(this.getAdListener());

		this._adg.start();
		console.log("init nativead done!!");

		return this;
	}

	// Viewを指定して初期化
	// Androidではview=com.socdm.d.adgeneration.ADG のインスタンスになります
	public initWithView(view: any, viewHeight: number, viewWidth: number, scale: number): this {
		// バナーの種類ごとに初期化
		if( this.adItem.type !== "banner" ){
			return null;
		}

		this._adg = view;

		this._adg.setLocationId(""+ this.adItem.locationId);

		// フリーサイズとしてバナーのサイズ設定
		let adSize = com.socdm.d.adgeneration.ADG.AdFrameSize.valueOf("FREE");
		this._adg.setAdFrameSize(adSize.setSize(viewWidth, viewHeight));
		this._adg.setAdScale(scale);
		this._adg.setUsePartsResponse(true);
		this._adg.setInformationIconViewDefault(false);

		this._adg.setAdListener(this.getAdListener());

		this._adg.start();

		return this;
	}

	public resumeAd() {
		// Androidでは不要
	}

	public dispose(){
		this._adg = null;
	}

	/**
	 * ネイティブAdを受信したとき
	 * @param ad
	 */
	public onReceiveAd(ad: any){
		let data = <NativeAdData>{
			object: null,
			eventName: "receiveNativeAd"
		};

		if( ad.getTitle() != null ){
			data.title = ad.getTitle().getText();
		}

		this.notify(data);
	}
}