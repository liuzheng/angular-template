import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { PluginModule } from "../plugins";

import { PageHomeComponent } from "./home"
import { PageNotFoundComponent } from "./not-found"
export { AppRootComponent } from "./root/root.component"

export const PageRoutes: Routes = [
  { path: '', component: PageHomeComponent },
  { path: '**', component: PageNotFoundComponent }
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
