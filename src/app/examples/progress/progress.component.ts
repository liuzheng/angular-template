import {Component, OnInit, AfterViewInit, ViewChild} from "@angular/core";
import {NgProgressComponent} from "ngx-progressbar";

@Component({
  selector: "example-progress",
  templateUrl: "./progress.component.html",
  styleUrls: ["./progress.component.sass"]
})
export class ExampleProgressComponent implements OnInit, AfterViewInit {
  @ViewChild(NgProgressComponent) progressBar!: NgProgressComponent;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.progressBar.start();
    // this.progressBar.complete()
  }
}
