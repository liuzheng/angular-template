import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms"; // <-- NgModel lives here
import { HttpClientModule, provideHttpClient } from "@angular/common/http";

import { AppRootComponent, PageModule } from "./pages";
import { PipesModule } from "./pipes";
import { ProviderModule } from "./providers"
import { PluginModule } from "./plugins";

import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { zh_CN } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

registerLocaleData(zh);

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    PipesModule,
    PluginModule,
    ProviderModule,
    PageModule
  ],
  declarations: [
    AppRootComponent,
  ],
  bootstrap: [AppRootComponent],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
    provideAnimationsAsync(),
    provideHttpClient()
  ]
})
export class AppModule {
}
