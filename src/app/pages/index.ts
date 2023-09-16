import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";

import {PluginModule} from "~/app/plugins";

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
