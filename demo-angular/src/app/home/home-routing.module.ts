import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { HomeComponent } from "./home.component";
import { ListViewComponent } from "~/app/home/listview/listview.component";

const routes: Routes = [
	{path: "", component: HomeComponent},
	{path: "listview", component: ListViewComponent}
];

@NgModule({
	imports: [NativeScriptRouterModule.forChild(routes)],
	exports: [NativeScriptRouterModule]
})
export class HomeRoutingModule {
}
