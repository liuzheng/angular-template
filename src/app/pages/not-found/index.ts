import {Component, OnInit} from '@angular/core';
import {Globals} from '../../globals';

@Component({
  selector: 'page-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {

  constructor(private global: Globals) {
  }

  ngOnInit() {
  }

}
