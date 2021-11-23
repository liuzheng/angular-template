import {NgModule} from "@angular/core";
import {Routes} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {PluginModule} from "../plugins";

import {ExampleDatatableComponent} from "./datatable/datatable.component"
import {ExampleMatMenuComponent} from "./mat-menu/mat-menu.component"
import {ExampleProgressComponent} from "./progress/progress.component"

export const ExampleRoutes: Routes = [
  {path: "example/datatable", component: ExampleDatatableComponent},
  {path: "example/matmenu", component: ExampleMatMenuComponent},
  {path: "example/progress", component: ExampleProgressComponent},
];

@NgModule({
  imports:[
    BrowserModule,
    PluginModule
  ],
  declarations: [
    ExampleDatatableComponent,
    ExampleMatMenuComponent,
    ExampleProgressComponent
  ]
})
export class ExamplesModule {
}
