import {Injectable} from "@angular/core";
import {NGXLogger} from "ngx-logger";

@Injectable()
export class LogProvider {
  level: number;

  constructor(private logger: NGXLogger) {
    // 0.- Level.OFF
    // 1.- Level.ERROR
    // 2.- Level.WARN
    // 3.- Level.INFO
    // 4.- Level.DEBUG
    // 5.- Level.LOG
    this.level = 4;
  }

  log(message: any, ...additional: any[]) {
    if (this.level > 4) {
      this.logger.log(message, ...additional);
    }
  }

  debug(message: any, ...additional: any[]) {
    if (this.level > 3) {
      this.logger.debug(message, ...additional);
    }
  }

  info(message: any, ...additional: any[]) {
    if (this.level > 2) {
      this.logger.info(message, ...additional);
    }
  }

  warn(message: any, ...additional: any[]) {
    if (this.level > 1) {
      this.logger.warn(message, ...additional);
    }
  }

  error(message: any, ...additional: any[]) {
    if (this.level > 0) {
      this.logger.error(message, ...additional);
    }
  }

}
