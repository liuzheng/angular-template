// import { CdkTreeModule } from "@angular/cdk/tree";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
// import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';

import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { HttpClient } from "@angular/common/http";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

// import { DataTablesModule } from "angular-datatables";
import { AngularSplitModule } from "angular-split";
import { LoggerModule, NgxLoggerLevel } from "ngx-logger";
import { NgProgressModule } from "ngx-progressbar";
import { ToastrModule } from "ngx-toastr";
import { NgxEchartsModule } from "ngx-echarts";

import { MaterialModule } from "at/app/plugins/Material.module";
// import { AntdModule } from "at/app/plugins/antd.module";
import { IconsModule } from "at/app/plugins/Icons.module";

import { PluginEditorComponent } from "at/app/plugins/ace-editor/ace-editor.component";
import { PluginTerminalComponent } from "at/app/plugins/terminal/terminal.component";
import { PluginProgressComponent } from "at/app/plugins/progress/progress.component";
import { ProviderModule } from "at/app/providers";
import { PipesModule } from "at/app/pipes";

@NgModule({
  imports: [
    CommonModule, RouterLink, RouterOutlet, RouterLinkActive,
    PipesModule, ProviderModule,
    // CdkTreeModule,
    // BrowserAnimationsModule,
    MaterialModule,
    // AntdModule,
    IconsModule,
    LoggerModule.forRoot({
      serverLoggingUrl: "/api/logs",
      level: NgxLoggerLevel.DEBUG,
      serverLogLevel: NgxLoggerLevel.ERROR
    }),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    AngularSplitModule,
    ToastrModule.forRoot(), // ToastrModule added
    NgxEchartsModule,
    // DataTablesModule,
    NgProgressModule,
    // ProviderModule,
  ],
  exports: [
    CommonModule, RouterLink, RouterOutlet, RouterLinkActive,
    FormsModule,
    MaterialModule,
    // AntdModule,
    IconsModule,
    AngularSplitModule,
    PluginEditorComponent,
    PluginTerminalComponent,
    PluginProgressComponent,
  ],
  declarations: [
    PluginEditorComponent,
    PluginTerminalComponent,
    PluginProgressComponent,
  ]
})
export class PluginModule {
}
