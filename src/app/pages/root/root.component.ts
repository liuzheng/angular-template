import {Component} from "@angular/core";
import {TranslateService} from "@ngx-translate/core";
import {Router} from "@angular/router";

import {AppProvider, LocalstorageProvider, LogProvider} from "../../providers";
import {Globals} from "../../globals";
import {baseHref} from "../../../environments/environment";

@Component({
  selector: "app-root",
  templateUrl: "./root.component.html",
  styleUrls: ["./root.component.sass"],
})
export class AppRootComponent {
  browserLang: any;

  constructor(private translate: TranslateService,
              private app: AppProvider,
              private router: Router,
              private logger: LogProvider,
              private globals: Globals,
              private localStorage: LocalstorageProvider,
  ) {
    logger.setLevel(0)
    translate.addLangs(["en", "cn"]);
    translate.setDefaultLang("en");

    this.browserLang = translate.getBrowserLang();
    if (this.browserLang.match(/zh/)) {
      this.app.translate("cn");
    } else {
      this.app.translate(this.browserLang.match(/en|cn/) ? this.browserLang : "en");
    }
    if (
      document.location.pathname === baseHref + "settings" ||
      document.location.pathname === baseHref + "test" ||
      document.location.pathname === baseHref + "connect"
    ) {
      // bypass the login check
    } else {
    }
  }
}
