import {Component, OnInit} from "@angular/core";
import {HttpClient, HttpHandler} from "@angular/common/http";

@Component({
  selector: "page-datatable",
  templateUrl: "./datatable.component.html",
  styleUrls: ["./datatable.component.sass"]
})
export class PageDatatableComponent implements OnInit {
  data: any;

  constructor(private http: HttpClient) {
    //get request from web api
    this.http.get("https://www.testjsonapi.com/users/").subscribe(data => {

      this.data = data;
      setTimeout(() => {
        $("#datatableexample").DataTable({
          pagingType: "full_numbers",
          pageLength: 5,
          processing: true,
          lengthMenu: [5, 10, 25]
        });
      }, 1);
    }, error => console.error(error));
  }

  ngOnInit(): void {
  }
}
