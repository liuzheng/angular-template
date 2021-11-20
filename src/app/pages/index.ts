import {NgModule} from "@angular/core";

import {PageIndexComponent} from "./index/index.component"
import {PageBlankComponent} from "./blank/blank.component";
import {PageNotFoundComponent} from "./not-found/not-found.component";

export {AppRootComponent} from "./root/root.component"
export {PageIndexComponent} from "./index/index.component"
export {PageBlankComponent} from "./blank/blank.component";
export {PageNotFoundComponent} from "./not-found/not-found.component";

@NgModule({
  declarations: [
    PageIndexComponent,
    PageBlankComponent,
    PageNotFoundComponent,
  ],
})
export class PageModule {
}
