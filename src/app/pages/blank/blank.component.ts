import {Component, OnInit} from '@angular/core';
import {Globals} from '../../globals';

@Component({
  selector: 'page-blank',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.sass']
})
export class PageBlankComponent implements OnInit {

  constructor(private global: Globals) {
  }

  ngOnInit() {
  }

}
