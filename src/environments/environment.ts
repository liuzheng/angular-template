// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import {Routes} from "@angular/router";
import * as pages from "../app/pages";
import {ExampleRoutes} from "../app/examples"

export const environment = {
  production: false
};

export const version = "开发版";
export const baseHref = "/";
export const appRoutes: Routes = [
  ...ExampleRoutes,
  {path: "undefined", component: pages.PageBlankComponent},
  {path: "", component: pages.PageIndexComponent},
  {path: "**", component: pages.PageNotFoundComponent}
];
