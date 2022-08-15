import { NgModule } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

import { MatIconModule, MatIconRegistry } from "@angular/material/icon";


class icon {
    name: string | undefined;
    path?: string;
}

@NgModule({
    exports: [MatIconModule],
})
export class IconsModule {
    icons: Array<icon>;

    constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
        this.icons = [
            { name: "ansible" },
            { name: "chevron_right" },
            { name: "console" },
            { name: "dashboard" },
            { name: "expand_more" },
            { name: "file-tree" },
            { name: "linux" },
            { name: "menu-left" },
            { name: "menu-right" },
            { name: "person" },
            { name: "settings" },
            { name: "windows" },
        ];
        this.icons.forEach(function (i: icon) {
            if (i.name != null) {
                iconRegistry.addSvgIcon(
                    i.name,
                    sanitizer.bypassSecurityTrustResourceUrl(i.path || "/assets/icons/" + i.name + ".svg")
                );
            }
        });
    }
}