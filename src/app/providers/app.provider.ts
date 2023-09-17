import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";
import {TranslateService} from "@ngx-translate/core";
import {LogProvider} from "./log.provider";
import {LocalstorageProvider} from "./localstorage.provider";

@Injectable()
export class AppProvider {
  constructor(private router: Router,
              private logger: LogProvider,
              private cookie: CookieService,
              private localStorage: LocalstorageProvider,
              private translater: TranslateService
  ) {
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
