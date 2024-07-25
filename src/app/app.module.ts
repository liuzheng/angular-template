import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms"; // <-- NgModel lives here
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { PagesComponents, PageModule, AppRootComponent } from "./pages";
import { PipesModule } from "./pipes";
import { ProviderModule } from "./providers"
import { PluginModule } from "./plugins";

@NgModule({ declarations: [
        ...PagesComponents,
    ],
    bootstrap: [AppRootComponent], imports: [BrowserModule,
        FormsModule,
        AppRoutingModule,
        PipesModule,
        PluginModule,
        ProviderModule,
        PageModule], providers: [provideHttpClient(withInterceptorsFromDi())] })
export class AppModule {
}
