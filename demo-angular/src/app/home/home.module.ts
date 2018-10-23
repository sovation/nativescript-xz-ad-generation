import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { XzAdGenerationModule } from "nativescript-xz-ad-generation/angular/xz-ad-generation.module";
import { ListViewComponent } from "~/app/home/listview/listview.component";

@NgModule({
	imports: [
		NativeScriptCommonModule,
		HomeRoutingModule,
		XzAdGenerationModule, // <-- Add this!
	],
	declarations: [
		HomeComponent,
		ListViewComponent
	],
	schemas: [
		NO_ERRORS_SCHEMA
	]
})
export class HomeModule {
}
