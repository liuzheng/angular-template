import {Routes} from "@angular/router";

import * as pages from "../app/pages";

export const environment = {
  production: true
};
export const version = "v0.0.0";
export const baseHref = "/";
export const appRoutes: Routes = [
  {path: "undefined", component: pages.PageBlankComponent},
  {path: "", component: pages.PageIndexComponent},
  {path: "**", component: pages.PageNotFoundComponent}
];
