import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import {  production } from "~/environments/environment";
import { PageRoutes } from "./pages";
@NgModule({
  imports: [
    RouterModule.forRoot(
      PageRoutes,
      { enableTracing: !production } 
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
