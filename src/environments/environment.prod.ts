import {Routes} from "@angular/router";

import {PageRoutes} from "../app/pages";

export const environment = {
  production: true
};
export const version = "v0.0.0";
export const baseHref = "/";
export const appRoutes: Routes = PageRoutes;
