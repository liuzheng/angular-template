import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import {PageIndexComponent} from "./index/index.component"
import {PageBlankComponent} from "./blank/blank.component";
import {PageNotFoundComponent} from "./not-found/not-found.component";

import {PartModule} from "../parts";
import {AppRootComponent} from "./root/root.component";
import {PluginModule} from "../plugins";

export {AppRootComponent} from "./root/root.component"

export const PageRoutes: Routes = [
  {path: "undefined", component: PageBlankComponent},
  {path: "", component: PageIndexComponent},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    PartModule,
    PluginModule,
    RouterModule,
  ],
  declarations: [
    PageIndexComponent,
    PageBlankComponent,
    PageNotFoundComponent,
  ],
})
export class PageModule {
}
