import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PluginQrCodeComponent } from './qrcode.component';

describe('PluginQrCodeComponent', () => {
  let component: PluginQrCodeComponent;
  let fixture: ComponentFixture<PluginQrCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PluginQrCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PluginQrCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
