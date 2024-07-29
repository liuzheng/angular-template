import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
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
// import { AngularSplitModule } from "angular-split";
import { LoggerModule, NgxLoggerLevel } from "ngx-logger";
// import { NgProgressModule } from "ngx-progressbar";
// import { ToastrModule } from "ngx-toastr";
// import { NgxEchartsModule } from "ngx-echarts";

import { MaterialModule } from "at/app/plugins/Material.module";
// import { AntdModule } from "at/app/plugins/antd.module";
import { IconsModule } from "at/app/plugins/Icons.module";

// import { PluginEditorComponent } from "at/app/plugins/ace-editor/ace-editor.component";
// import { PluginTerminalComponent } from "at/app/plugins/terminal/terminal.component";
// import { PluginProgressComponent } from "at/app/plugins/progress/progress.component";
import { ProviderModule } from "at/app/providers";
import { PipesModule } from "at/app/pipes";

export const Plugins = [
  // PipesModule, ProviderModule,
  // AntdModule,
  // MaterialModule,
  // IconsModule,
  CommonModule, RouterLink, RouterOutlet, RouterLinkActive,
  FormsModule,
  // LoggerModule.forRoot({
  //   serverLoggingUrl: "/api/logs",
  //   level: NgxLoggerLevel.DEBUG,
  //   serverLogLevel: NgxLoggerLevel.ERROR
  // }),
  // TranslateModule.forRoot({
  //   loader: {
  //     provide: TranslateLoader,
  //     useFactory: HttpLoaderFactory,
  //     deps: [HttpClient]
  //   }
  // }),
  // ToastrModule.forRoot(), // ToastrModule added
  // AngularSplitModule,
  // NgxEchartsModule,
  // DataTablesModule,
  // NgProgressModule,
]
