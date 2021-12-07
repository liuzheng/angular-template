import {CdkTreeModule} from "@angular/cdk/tree";
import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {DataTablesModule} from "angular-datatables";
import {AngularSplitModule} from "angular-split";
import {LoggerModule, NgxLoggerLevel} from "ngx-logger";
import {NgProgressModule} from "ngx-progressbar";
import {ToastrModule} from "ngx-toastr";
import {NgxEchartsModule} from "ngx-echarts";
import {QrCodeModule} from "ng-qrcode";

import {MaterialModule} from "./MaterialModule.component";

@NgModule({
  imports: [
    CdkTreeModule,
    BrowserAnimationsModule,
    MaterialModule,
    LoggerModule.forRoot({
      serverLoggingUrl: "/api/logs",
      level: NgxLoggerLevel.DEBUG,
      serverLogLevel: NgxLoggerLevel.ERROR
    }),
    // NgxDatatableModule,
    // NgxUIModule,
    AngularSplitModule,
    ToastrModule.forRoot(), // ToastrModule added
    NgxEchartsModule,
    // ContextMenuModule.forRoot({
    //   useBootstrap4: true
    // }),
    DataTablesModule
  ],
  exports: [
    FormsModule,
    MaterialModule,
    NgProgressModule,
    AngularSplitModule,
    QrCodeModule,
  ]
})
export class PluginModule {
}
