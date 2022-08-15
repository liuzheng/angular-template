import { CdkTreeModule } from "@angular/cdk/tree";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { DataTablesModule } from "angular-datatables";
import { AngularSplitModule } from "angular-split";
import { LoggerModule, NgxLoggerLevel } from "ngx-logger";
import { NgProgressModule } from "ngx-progressbar";
import { ToastrModule } from "ngx-toastr";
import { NgxEchartsModule } from "ngx-echarts";

import { MaterialModule } from "./Material.module";
import { IconsModule } from "./Icons.module";

import { QRCodeModule } from 'angularx-qrcode';
import { PluginQrCodeComponent } from "./qrcode/qrcode.component";
import { PluginEditorComponent } from "./ace-editor/ace-editor.component";
import { PluginTerminalComponent } from "./terminal/terminal.component";
import { PluginProgressComponent } from "./progress/progress.component";

@NgModule({
  imports: [
    CdkTreeModule,
    BrowserAnimationsModule,
    MaterialModule,
    IconsModule,
    LoggerModule.forRoot({
      serverLoggingUrl: "/api/logs",
      level: NgxLoggerLevel.DEBUG,
      serverLogLevel: NgxLoggerLevel.ERROR
    }),
    AngularSplitModule,
    ToastrModule.forRoot(), // ToastrModule added
    NgxEchartsModule,
    DataTablesModule,
    NgProgressModule,
    QRCodeModule,
  ],
  exports: [
    FormsModule,
    MaterialModule,
    AngularSplitModule,
    PluginQrCodeComponent,
    PluginEditorComponent,
    PluginTerminalComponent,
    PluginProgressComponent,
  ],
  declarations: [
    PluginQrCodeComponent,
    PluginEditorComponent,
    PluginTerminalComponent,
    PluginProgressComponent,
  ]
})
export class PluginModule {
}