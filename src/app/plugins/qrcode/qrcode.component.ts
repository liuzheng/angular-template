import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'qr',
  templateUrl: './qrcode.component.html',
  styleUrls: ['./qrcode.component.sass'],
})
export class PluginQrCodeComponent implements OnInit {
  @Input() data: string="";
  @Input() width: number=256;
  
  constructor() { }

  ngOnInit(): void {
  }

}
