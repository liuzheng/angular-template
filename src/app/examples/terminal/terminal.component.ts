import {Component, ElementRef, OnInit, AfterViewInit, ViewChild} from "@angular/core";
import {Terminal} from "xterm";
import {WebLinksAddon} from "xterm-addon-web-links";
import {AttachAddon} from "xterm-addon-attach";
import {FitAddon} from "xterm-addon-fit";

@Component({
  selector: "example-terminal",
  templateUrl: "./terminal.component.html",
  styleUrls: ["./terminal.component.sass"]
})
export class ExampleTerminalComponent implements OnInit, AfterViewInit {
  @ViewChild("terminal", {static: false}) el!: ElementRef;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const terminal = new Terminal();
    terminal.loadAddon(new WebLinksAddon());
    // terminal.loadAddon(new AttachAddon(webSocket));
    const fitAddon = new FitAddon();
    terminal.loadAddon(fitAddon);
    terminal.open(this.el.nativeElement);
    fitAddon.fit();

    terminal.write("Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ")
  }

}
