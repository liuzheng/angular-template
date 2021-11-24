import {Component, OnInit, ViewChild, ElementRef, AfterViewInit} from "@angular/core";
import * as ace from "ace-builds";

@Component({
  selector: "example-ace-editor",
  templateUrl: "./ace-editor.component.html",
  styleUrls: ["./ace-editor.component.sass"]
})
export class ExampleAceEditorComponent implements OnInit, AfterViewInit {
  @ViewChild("editor") private editor!: ElementRef<HTMLElement>;

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
    aceEditor.setTheme("ace/theme/twilight");
    aceEditor.session.setMode("ace/mode/html");
    aceEditor.on("change", () => {
      console.log(aceEditor.getValue());
    });

  }

}
