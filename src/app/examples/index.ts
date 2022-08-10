import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {PluginModule} from "../plugins";

import {ExampleDatatableComponent} from "./datatable/datatable.component"
import {ExampleMatMenuComponent} from "./mat-menu/mat-menu.component"
import {ExampleProgressComponent} from "./progress/progress.component"
import {ExampleTerminalComponent} from "./terminal/terminal.component";
import {ExampleMetroUIComponent} from "./metroui/metroui.component";
import {ExampleContextMenuComponent} from "./context-menu/context-menu.component";
import {ExampleEditorComponent} from "./editor/editor.component";
import {PipesModule} from "../pipes";

export const ExampleRoutes: Routes = [
  {path: "example/datatable", component: ExampleDatatableComponent},
  {path: "example/matmenu", component: ExampleMatMenuComponent},
  {path: "example/progress", component: ExampleProgressComponent},
  {path: "example/editor", component: ExampleEditorComponent},
  {path: "example/terminal", component: ExampleTerminalComponent},
  {path: "example/metroui", component: ExampleMetroUIComponent},
  {path: "example/metroui/contextmenu", component: ExampleContextMenuComponent},
];

@NgModule({
  imports: [
    BrowserModule,
    PluginModule,
    RouterModule,
    PipesModule
  ],
  declarations: [
    ExampleDatatableComponent,
    ExampleMatMenuComponent,
    ExampleProgressComponent,
    ExampleEditorComponent,
    ExampleTerminalComponent,
    ExampleMetroUIComponent,
    ExampleContextMenuComponent,
  ]
})
export class ExamplesModule {
}
