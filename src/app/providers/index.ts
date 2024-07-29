import { NgModule } from "@angular/core";
import { NGXLogger } from "ngx-logger";

// import {DialogService, ElementDialogComponent} from './elements/dialog/dialog.service';
// import {MAT_LABEL_GLOBAL_OPTIONS} from '@angular/material/core';

import { AppProvider } from "at/app/providers/app.provider";
import { LogProvider } from "at/app/providers/log.provider";
import { UUIDService } from "at/app/providers/uuid.provider";
import { LocalstorageProvider } from "at/app/providers/localstorage.provider";

export { AppProvider } from "at/app/providers/app.provider";
export { LogProvider } from "at/app/providers/log.provider";
export { UUIDService } from "at/app/providers/uuid.provider";
export { LocalstorageProvider } from "at/app/providers/localstorage.provider";

@NgModule({
  providers: [
    LogProvider,
    NGXLogger,
    AppProvider,
    UUIDService,
    LocalstorageProvider,
    // {provide: MAT_LABEL_GLOBAL_OPTIONS, useValue: {float: 'always'}},
    // { provide: HTTP_INTERCEPTORS, useClass: NgProgressInterceptor, multi: true }
  ],
})
export class ProviderModule {
}
