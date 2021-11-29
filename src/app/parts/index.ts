import {NgModule} from "@angular/core";
import {PartContextMenuComponent} from "./context-menu/context-menu.component";
import {PluginModule} from "../plugins";
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    PluginModule,
    RouterModule
  ],
  exports: [
    PartContextMenuComponent
  ],
  declarations: [
    PartContextMenuComponent
  ]
})
export class PartModule {
}
