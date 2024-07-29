import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

// import { AppProvider, LogProvider } from "at/app/providers";
import { production } from "at/environments/environment";
import { baseHref } from "at/app/globals";

// import { PipesModule } from "at/app/pipes";
import { CommonModule } from "@angular/common";
import { PluginModule } from "at/app/plugins";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    CommonModule, RouterLink, RouterOutlet, RouterLinkActive,
    // PipesModule,
    PluginModule,
  ],
  templateUrl: "./root.component.html",
  styleUrls: ["./root.component.sass"],
})
export class AppRootComponent {
  browserLang: any;
  isCollapsed = false;

  constructor(private translate: TranslateService,
    // private app: AppProvider,
    private router: Router,
    // private logger: LogProvider,
  ) {
    if (production) {
      //   logger.setLevel(0)
      // } else {
      //   logger.setLevel(5)
    }
    translate.addLangs(["en", "cn"]);
    translate.setDefaultLang("en");

    this.browserLang = translate.getBrowserLang();
    if (this.browserLang.match(/zh/)) {
      //   this.app.translate("cn");
      // } else {
      //   this.app.translate(this.browserLang.match(/en|cn/) ? this.browserLang : "en");
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
