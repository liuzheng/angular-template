import {Injectable, OnInit} from "@angular/core";
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";
// import "rxjs/add/operator/map";
// import "rxjs/add/operator/catch";
import {TranslateService} from "@ngx-translate/core";
import {environment} from "../../environments/environment";
import {LogProvider} from "./log.provider";
import {LocalstorageProvider} from "./localstorage.provider";
// import {DialogService} from "../elements/dialog/dialog.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Globals} from "../globals";

// declare function unescape(s: string): string;

@Injectable()
export class AppProvider {
  // user:User = user  ;

  constructor(private router: Router,
              private logger: LogProvider,
              private globals: Globals,
              private cookie: CookieService,
              private localStorage: LocalstorageProvider,
              private translater: TranslateService
  ) {
    // 0.- Level.OFF
    // 1.- Level.ERROR
    // 2.- Level.WARN
    // 3.- Level.INFO
    // 4.- Level.DEBUG
    // 5.- Level.LOG
    globals.loglevel = parseInt(localStorage.getItem("logLevel", "0"), 10);
    // this.logger.debug('Your debug stuff');
    // this.logger.info('An info');
    // this.logger.warn('Take care ');
    // this.logger.error('Too late !');
    // this.logger.log('log !');
  }

  translate(lang: string) {
    this.translater.use(lang);
    this.localStorage.setItem("lang", lang);
  }

  transEN() {
    this.translate("en");
  }

  transCN() {
    this.translate("cn");
  }
}
