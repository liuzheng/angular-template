import { Injectable } from "@angular/core";
import { NGXLogger } from "ngx-logger";
import { Globals } from "@at/app/globals";
import { LocalstorageProvider } from "./localstorage.provider";

@Injectable()
export class LogProvider {
  constructor(private logger: NGXLogger,
    private globals: Globals,
    private localStorage: LocalstorageProvider) {
    // 0.- Level.OFF
    // 1.- Level.ERROR
    // 2.- Level.WARN
    // 3.- Level.INFO
    // 4.- Level.DEBUG
    // 5.- Level.LOG
  }

  setLevel(level: number) {
    this.localStorage.setItem("logLevel", level.toString())
    this.globals.loglevel = level
  }

  log(message: any, ...additional: any[]) {
    if (this.globals.loglevel > 4) {
      this.logger.log(message, ...additional);
    }
  }

  debug(message: any, ...additional: any[]) {
    if (this.globals.loglevel > 3) {
      this.logger.debug(message, ...additional);
    }
  }

  info(message: any, ...additional: any[]) {
    if (this.globals.loglevel > 2) {
      this.logger.info(message, ...additional);
    }
  }

  warn(message: any, ...additional: any[]) {
    if (this.globals.loglevel > 1) {
      this.logger.warn(message, ...additional);
    }
  }

  error(message: any, ...additional: any[]) {
    if (this.globals.loglevel > 0) {
      this.logger.error(message, ...additional);
    }
  }

}
