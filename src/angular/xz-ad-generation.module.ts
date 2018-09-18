import { NgModule } from "@angular/core";
import { registerElement } from "nativescript-angular/element-registry";

// import { DIRECTIVES } from "./<your-plugin-name>.directives";

// @NgModule({
//   declarations: [DIRECTIVES],
//   exports: [DIRECTIVES],
// })
// export class XzAdGenerationModule {
//
// }
//
registerElement("XzAdBanner", () => require("../ui/banner/xz-ad-banner").XzAdBanner);
