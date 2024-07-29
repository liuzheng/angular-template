import { NgModule } from "@angular/core";

import { UtcDatePipe } from "at/app/pipes/date.pipe";
import { NoOrYesPipe, YesOrNoPipe } from "at/app/pipes/yesorno.pipe";
import { SafePipe } from "at/app/pipes/safe.pipe";

@NgModule({
  declarations: [
    UtcDatePipe,
    NoOrYesPipe, YesOrNoPipe,
    SafePipe,
  ]
})
export class PipesModule {
}
