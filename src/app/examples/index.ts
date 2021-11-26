import {NgModule} from "@angular/core";
import {Routes} from "@angular/router";
import {BrowserModule} from "@angular/platform-browser";
import {PluginModule} from "../plugins";

import {ExampleDatatableComponent} from "./datatable/datatable.component"
import {ExampleMatMenuComponent} from "./mat-menu/mat-menu.component"
import {ExampleProgressComponent} from "./progress/progress.component"
import {ExampleAceEditorComponent} from "./ace-editor/ace-editor.component"
import {ExampleTerminalComponent} from "./terminal/terminal.component";
import {ExampleMetroUIComponent} from "./metroui/metroui.component";

export const ExampleRoutes: Routes = [
  {path: "example/datatable", component: ExampleDatatableComponent},
  {path: "example/matmenu", component: ExampleMatMenuComponent},
  {path: "example/progress", component: ExampleProgressComponent},
  {path: "example/aceeditor", component: ExampleAceEditorComponent},
  {path: "example/terminal", component: ExampleTerminalComponent},
  {path: "example/metroui", component: ExampleMetroUIComponent},
];

@NgModule({
  imports: [
    BrowserModule,
    PluginModule
  ],
  declarations: [
    ExampleDatatableComponent,
    ExampleMatMenuComponent,
    ExampleProgressComponent,
    ExampleAceEditorComponent,
    ExampleTerminalComponent,
    ExampleMetroUIComponent,
  ]
})
export class ExamplesModule {
}
