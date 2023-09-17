import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms"; // <-- NgModel lives here
import { HttpClientModule } from "@angular/common/http";

import { PagesComponents, PageRoutingModule, AppRootComponent } from "./pages";
import { PipesModule } from "./pipes";
import { Providers } from "./providers"
import { PluginModule } from "./plugins";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    PipesModule,
    PluginModule,
    ...Providers,
    PageRoutingModule
  ],
  declarations: [
    ...PagesComponents,
  ],
  bootstrap: [AppRootComponent]
})
export class AppModule {
}
