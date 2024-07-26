import { Routes } from "@angular/router";

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
