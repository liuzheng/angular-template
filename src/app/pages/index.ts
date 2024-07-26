import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";

import { PluginModule } from "at/app/plugins";

import { AppRootComponent } from "./root"
import { PageNotFoundComponent } from "./not-found"
export { AppRootComponent } from "./root"

export const PagesComponents = [
  AppRootComponent,
  PageNotFoundComponent
]
export const PageRoutes: Routes = [

  { path: '', component: AppRootComponent },

  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    PluginModule,
  ],
  declarations: [
  ],
})
export class PageRoutingModule {
}
