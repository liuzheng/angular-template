import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { production } from "at/environments/environment";
import { PluginModule } from "at/app/plugins";

import { AppRootComponent } from "./root"
import { PageHomeComponent } from "./home"
import { PageNotFoundComponent } from "./not-found"
export { AppRootComponent } from "./root"

export const PagesComponents = [
  AppRootComponent,
  PageHomeComponent,
  PageNotFoundComponent
]
export const PageRoutes: Routes = [

  { path: '', component: PageHomeComponent },

  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    PluginModule,
    RouterModule.forRoot(
      PageRoutes,
      { enableTracing: !production }
    ),
  ],
  exports: [RouterModule],
  declarations: [],
})
export class PageRoutingModule {
}
