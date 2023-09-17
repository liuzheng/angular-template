import { Injectable, NgModule } from "@angular/core";
import { NGXLogger, LoggerModule, NgxLoggerLevel } from 'ngx-logger';

import { production } from "at/environments/environment";
import { LocalstorageProvider } from "./localstorage.provider";

@Injectable()
export class LogProvider {
  constructor(
    private logger: NGXLogger,
    private localStorage: LocalstorageProvider
  ) {
    // 0.- Level.OFF
    // 1.- Level.TRACE
    // 2.- Level.DEBUG
    // 3.- Level.INFO
    // 4.- Level.LOG
    // 5.- Level.WARN
    // always - Level.ERROR
    // always - Level.TRACE
    if (production) {
      this.localStorage.setItem("logLevel", '0')
    }
  }

  setLevel(level: number) {
    this.localStorage.setItem("logLevel", level.toString())
  }
  getLevel() {
    return Number(this.localStorage.getItem("logLevel"))
  }
  trace(message?: any | (() => any), ...additional: any[]) {
    if (this.getLevel() > 0) {
      this.logger.trace(message, ...additional);
    }
  }
  debug(message?: any | (() => any), ...additional: any[]) {
    if (this.getLevel() > 1) {
      this.logger.debug(message, ...additional);
    }
  }
  info(message?: any | (() => any), ...additional: any[]) {
    if (this.getLevel() > 2) {
      this.logger.info(message, ...additional);
    }
  }
  log(message?: any | (() => any), ...additional: any[]) {
    if (this.getLevel() > 3) {
      this.logger.log(message, ...additional);
    }
  }

  warn(message?: any | (() => any), ...additional: any[]) {
    if (this.getLevel() > 4) {
      this.logger.warn(message, ...additional);
    }
  }
  error(message?: any | (() => any), ...additional: any[]) {
    this.logger.warn(message, ...additional);
  }
  fatal(message?: any | (() => any), ...additional: any[]) {
    this.logger.fatal(message, ...additional);
  }
}

@NgModule({
  imports: [
    LoggerModule.forRoot({
      serverLoggingUrl: '/api/logs',
      level: NgxLoggerLevel.DEBUG,
      serverLogLevel: NgxLoggerLevel.ERROR
    }),
  ],
})
export class LogModule { }
