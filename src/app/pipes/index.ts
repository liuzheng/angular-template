import {NgModule} from "@angular/core";

import {UtcDatePipe} from "./date.pipe";
import {NoOrYesPipe, YesOrNoPipe} from "./yesorno.pipe";
import {SafePipe} from "./safe.pipe";

export {UtcDatePipe} from "./date.pipe";
export {NoOrYesPipe, YesOrNoPipe} from "./yesorno.pipe";
export {SafePipe} from "./safe.pipe";

@NgModule({
  declarations: [
    UtcDatePipe,
    NoOrYesPipe, YesOrNoPipe,
    SafePipe,
  ]
})
export class PipesModule {
}
