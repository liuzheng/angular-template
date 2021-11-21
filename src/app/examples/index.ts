import {NgModule} from "@angular/core";
import {Routes} from "@angular/router";

import {ExampleDatatableComponent} from "./datatable/datatable.component"

export {ExampleDatatableComponent} from "./datatable/datatable.component"
export const ExampleRoutes: Routes = [
  {path: "example/datatable", component: ExampleDatatableComponent},
];

@NgModule({
  declarations: [
    ExampleDatatableComponent
  ]
})
export class ExamplesModule {
}
