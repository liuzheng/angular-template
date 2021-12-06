import {NgModule} from "@angular/core";

import {MaterialModule} from "./MaterialModule.component";
import {LoggerModule, NgxLoggerLevel} from "ngx-logger";
// import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgProgressModule} from "ngx-progressbar";

import {ToastrModule} from "ngx-toastr";
import {NgxEchartsModule} from "ngx-echarts";
import {CdkTreeModule} from "@angular/cdk/tree";
// import {ContextMenuModule} from 'ngx-contextmenu';
import {AngularSplitModule} from "angular-split";
import {DataTablesModule} from "angular-datatables";
import {FormsModule} from "@angular/forms";

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
    // FlexLayoutModule,
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
    AngularSplitModule
  ]
})
export class PluginModule {
}
