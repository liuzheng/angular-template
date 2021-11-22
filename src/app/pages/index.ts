import {NgModule} from "@angular/core";
import {Routes} from "@angular/router";

import {PageIndexComponent} from "./index/index.component"
import {PageBlankComponent} from "./blank/blank.component";
import {PageNotFoundComponent} from "./not-found/not-found.component";

export {AppRootComponent} from "./root/root.component"
export {PageIndexComponent} from "./index/index.component"
export {PageBlankComponent} from "./blank/blank.component";
export {PageNotFoundComponent} from "./not-found/not-found.component";


export const PageRoutes: Routes = [
  {path: "undefined", component:  PageBlankComponent},
  {path: "", component:  PageIndexComponent},
  {path: "**", component:  PageNotFoundComponent}
];

@NgModule({
  declarations: [
    PageIndexComponent,
    PageBlankComponent,
    PageNotFoundComponent,
  ],
})
export class PageModule {
}
