import { Component, OnInit, ViewChild, ElementRef, Input, AfterViewInit } from "@angular/core";
import * as ace from "ace-builds";
// todo: npm i ngx-ace-wrapper
@Component({
  selector: "at-editor",
  templateUrl: "./ace-editor.component.html",
  styleUrls: ["./ace-editor.component.sass"]
})
export class PluginEditorComponent implements OnInit, AfterViewInit {
  @ViewChild("editor") private editor!: ElementRef<HTMLElement>;
  @Input() theme = "ace/theme/twilight";
  @Input() mode ="ace/mode/html";
  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    ace.config.set("fontSize", "14px");
    const aceEditor = ace.edit(this.editor.nativeElement);
    ace.config.set(
      "basePath",
      "assets/ace"
    );
    aceEditor.session.setValue("<h1>Ace Editor works great in Angular!</h1>");
    aceEditor.setTheme(this.theme);
    aceEditor.session.setMode(this.mode);
    aceEditor.on("change", () => {
      console.log(aceEditor.getValue());
    });

  }

}
