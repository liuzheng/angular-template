import { NgModule } from "@angular/core";
import { NGXLogger } from "ngx-logger";

// import {DialogService, ElementDialogComponent} from './elements/dialog/dialog.service';
// import {MAT_LABEL_GLOBAL_OPTIONS} from '@angular/material/core';

import { AppProvider } from "./app.provider";
import { LogProvider } from "./log.provider";
import { UUIDService } from "./uuid.provider";
import { LocalstorageProvider } from "./localstorage.provider";
import { DialogProvider } from "./dialog/dialog.provider";

export { AppProvider } from "./app.provider";
export { LogProvider } from "./log.provider";
export { UUIDService } from "./uuid.provider";
export { LocalstorageProvider } from "./localstorage.provider";

@NgModule({
  providers: [
    LogProvider,
    NGXLogger,
    AppProvider,
    UUIDService,
    LocalstorageProvider,
    DialogProvider,
    // {provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: {float: 'always'}},
    // { provide: HTTP_INTERCEPTORS, useClass: NgProgressInterceptor, multi: true }
  ],
})
export class ProviderModule {
}
