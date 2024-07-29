import { Component } from "@angular/core";
import { Plugins } from "at/app/plugins";
// import { TranslateService } from "@ngx-translate/core";
// import { Router } from '@angular/router';

// import { production } from "at/environments/environment";
// import { baseHref } from "at/app/globals";

// import { AppProvider, LogProvider } from "src/app/providers";

@Component({
  selector: "app-root",
  standalone: true,
  imports: Plugins,
  templateUrl: "./root.component.html",
  styleUrls: ["./root.component.sass"],
})
export class AppRootComponent {
}
