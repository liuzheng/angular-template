import {NgModule} from "@angular/core";

import {MaterialModule, MaterialModules} from "./MaterialModule.component";
import {LoggerModule, NgxLoggerLevel} from "ngx-logger";
// import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
// import {NgProgressModule} from 'ngx-progressbar';
// import {FlexLayoutModule} from '@angular/flex-layout';

import {ToastrModule} from "ngx-toastr";
import {HttpClient} from "@angular/common/http";
import {TranslateModule, TranslateLoader} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {NgxEchartsModule} from "ngx-echarts";
import {CdkTreeModule} from "@angular/cdk/tree";
// import {ContextMenuModule} from 'ngx-contextmenu';
// import {SplitModule} from "./split/split.module";

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    CdkTreeModule,
    BrowserAnimationsModule,
    // NgProgressModule,
    MaterialModule,
    // ...MaterialModules,
    LoggerModule.forRoot({
      serverLoggingUrl: "/api/logs",
      level: NgxLoggerLevel.DEBUG,
      serverLogLevel: NgxLoggerLevel.ERROR
    }),
    // NgxDatatableModule,
    // NgxUIModule,
    // SplitModule
    // FlexLayoutModule,
    ToastrModule.forRoot(), // ToastrModule added
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    // NgxEchartsModule,
    // ContextMenuModule.forRoot({
    //   useBootstrap4: true
    // }),
    // SplitModule
  ]
})
export class PluginModule {
}
