import {Component, OnInit} from "@angular/core";
import {LocalstorageProvider} from "../../providers";

@Component({
  selector: "page-index",
  templateUrl: "./index.component.html",
  styleUrls: ["./index.component.sass"]
})
export class PageIndexComponent implements OnInit {
  i!: number;

  constructor(private localStorage: LocalstorageProvider) {
    this.i = eval(localStorage.getItem("i", "0"));
    console.log(this.i)
  }

  ngOnInit(): void {
  }

  add() {
    this.i++;
    this.localStorage.setItem("i", (this.i).toString())
  }
}
