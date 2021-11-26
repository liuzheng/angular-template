import {NgModule} from "@angular/core";
import {PartContextMenuComponent} from "./context-menu/context-menu.component";
import {PluginModule} from "../plugins";

@NgModule({
  imports: [PluginModule],
  exports: [
    PartContextMenuComponent
  ],
  declarations: [
    PartContextMenuComponent
  ]
})
export class PartModule {
}
