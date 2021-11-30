// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import {Routes} from "@angular/router";
import {ExampleRoutes} from "../app/examples"
import {PageRoutes} from "../app/pages";

export const environment = {
  production: false
};

export const version = "开发版";
export const baseHref = "/";
export const appRoutes: Routes = [
  ...ExampleRoutes,
  ...PageRoutes
];
