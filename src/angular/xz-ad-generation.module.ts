import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { registerElement } from "nativescript-angular/element-registry";
import { XzAdGLayoutComponent } from "./components/xz-ad-g-layout/xz-ad-g-layout.component";
import { NativeScriptCommonModule } from "nativescript-angular/common";

@NgModule({
	imports: [
		NativeScriptCommonModule
	],
	declarations: [
		XzAdGLayoutComponent,
	],
  exports: [
  	XzAdGLayoutComponent,
  ],
	schemas: [
		NO_ERRORS_SCHEMA,
	]
})
export class XzAdGenerationModule {
}

// Angular用のセレクタ登録
registerElement("XzAdGBanner", () => require("../ui/banner/banner").Banner);
registerElement("XzAdGInformationIconView", () => require("../ui/information-icon-view/information-icon-view").InformationIconView);
registerElement("XzAdGMediaView", () => require("../ui/media-view/media-view").MediaView);
