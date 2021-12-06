import {NgModule} from "@angular/core";

import {UtcDatePipe} from "./date.pipe";
import {NoOrYesPipe, YesOrNoPipe} from "./yesorno.pipe";
import {SafePipe} from "./safe.pipe";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpClient} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";

// AoT requires an exported function for factories
function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  imports: [
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
  ],
  declarations: [
    UtcDatePipe,
    NoOrYesPipe, YesOrNoPipe,
    SafePipe,
  ],
  exports: [
    TranslateModule
  ]
})
export class PipesModule {
}
