import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import {AppRootComponent} from "./root/root.component";
import {PluginModule} from "../plugins";
import { Globals } from "../globals";

export {AppRootComponent} from "./root/root.component"

export const PageRoutes: Routes = [
];

@NgModule({
  imports: [
    PluginModule,
    RouterModule,
  ],
  declarations: [
  ],
})
export class PageModule {
}
