import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'at-qrcode',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.sass'],
})
export class PluginQrCodeComponent implements OnInit {
  @Input() data: string="";
  @Input() size: number=256;
  
  constructor() { }

  ngOnInit(): void {
  }

}
