import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import {PluginModule} from "../plugins";
import { PageIndexComponent } from "./index/index.component";
import { PageBlankComponent } from "./blank/blank.component";
import { PageNotFoundComponent } from "./not-found/not-found.component";

export {AppRootComponent} from "./root/root.component"

export const PageRoutes: Routes = [
  {path: "undefined", component: PageBlankComponent},
  {path: "", component: PageIndexComponent},
  {path: "**", component: PageNotFoundComponent}
];

@NgModule({
  imports: [
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
