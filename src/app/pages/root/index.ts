import { Component } from "@angular/core";
// import { Plugins } from "at/app/plugins";
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';

// import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-root",
  standalone: true,
  // imports: Plugins,
  imports: [
    CommonModule, RouterLink, RouterOutlet, RouterLinkActive,
  ],
  templateUrl: "./root.component.html",
  styleUrls: ["./root.component.sass"],
})
export class AppRootComponent {
}
