import { CdkTreeModule } from "@angular/cdk/tree";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

// import { DataTablesModule } from "angular-datatables";
import { LoggerModule, NgxLoggerLevel } from "ngx-logger";
import { NgProgressModule } from "ngx-progressbar";
import { ToastrModule } from "ngx-toastr";
import { NgxEchartsModule } from "ngx-echarts";

import { PipesModule } from "at/app/pipes";
import { ProviderModule } from "at/app/providers"

import { MaterialModule } from "./Material.module";
import { IconsModule } from "./Icons.module";
import { AntdModule } from "./antd.module";
import { PluginEditorComponent } from "./ace-editor/ace-editor.component";
import { PluginTerminalComponent } from "./terminal/terminal.component";
import { PluginProgressComponent } from "./progress/progress.component";

@NgModule({
  imports: [
    CdkTreeModule,
    BrowserModule, BrowserAnimationsModule, HttpClientModule,
    MaterialModule,
    IconsModule,
    LoggerModule.forRoot({
      serverLoggingUrl: "/api/logs",
      level: NgxLoggerLevel.DEBUG,
      serverLogLevel: NgxLoggerLevel.ERROR
    }),
    ToastrModule.forRoot(), // ToastrModule added
    NgxEchartsModule,
    // DataTablesModule,
    NgProgressModule,
    PipesModule,
    ProviderModule,
    AntdModule,
  ],
  exports: [
    FormsModule,
    MaterialModule,
    IconsModule,
    AntdModule,
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
