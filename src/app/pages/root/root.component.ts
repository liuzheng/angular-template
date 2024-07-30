import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Router } from "@angular/router";

import { AppProvider, LogProvider } from "at/app/providers";

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
  ) {
    // if (production) {
    //   logger.setLevel(0)
    // } else {
    //   logger.setLevel(5)
    // }
    translate.addLangs(["en", "cn"]);
    translate.setDefaultLang("en");

    this.browserLang = translate.getBrowserLang();
    if (this.browserLang.match(/zh/)) {
      this.app.translate("cn");
    } else {
      this.app.translate(this.browserLang.match(/en|cn/) ? this.browserLang : "en");
    }
  }
}
