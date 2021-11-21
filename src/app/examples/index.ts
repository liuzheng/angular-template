import {NgModule} from "@angular/core";
import {Routes} from "@angular/router";

import {ExampleDatatableComponent} from "./datatable/datatable.component"
import {BrowserModule} from "@angular/platform-browser";

export {ExampleDatatableComponent} from "./datatable/datatable.component"
export const ExampleRoutes: Routes = [
  {path: "example/datatable", component: ExampleDatatableComponent},
];

@NgModule({
  imports:[
    BrowserModule,
  ],
  declarations: [
    ExampleDatatableComponent
  ]
})
export class ExamplesModule {
}
