import { NgModule } from "@angular/core";
import { AppRootComponent, PageModule } from "./pages";
import { PluginModule } from "./plugins";


@NgModule({
  imports: [
    PluginModule,
    PageModule,
  ],
  declarations: [
    AppRootComponent,
  ],
  bootstrap: [AppRootComponent],
})
export class AppModule {
}
