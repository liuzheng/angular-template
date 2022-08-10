import {Component, ElementRef, OnInit, AfterViewInit, ViewChild} from "@angular/core";
import {Terminal} from "xterm";
import {WebLinksAddon} from "xterm-addon-web-links";
import {AttachAddon} from "xterm-addon-attach";
import {FitAddon} from "xterm-addon-fit";
import "zmodem.js/dist/zmodem.devel"

// todo: zmode support
@Component({
  selector: "at-terminal",
  templateUrl: "./terminal.component.html",
  styleUrls: ["./terminal.component.sass"]
})
export class PluginTerminalComponent implements OnInit, AfterViewInit {
  @ViewChild("terminal", {static: false}) el!: ElementRef;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const terminal = new Terminal();
    terminal.loadAddon(new WebLinksAddon());
    const fitAddon = new FitAddon();
    terminal.loadAddon(fitAddon);

    terminal.open(this.el.nativeElement);
    // terminal.loadAddon(new AttachAddon(webSocket));
    fitAddon.fit();

    terminal.write("Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ")
  }

}
