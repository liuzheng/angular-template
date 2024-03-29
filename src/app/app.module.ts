import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms"; // <-- NgModel lives here
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppRootComponent, PageModule } from "./pages";
import { PipesModule } from "./pipes";
import { ProviderModule } from "./providers"
import { PluginModule } from "./plugins";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    PipesModule,
    PluginModule,
    ProviderModule,
    PageModule
  ],
  declarations: [
    AppRootComponent,
  ],
  bootstrap: [AppRootComponent]
})
export class AppModule {
}
