import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PluginMenuComponent } from './menu.component';

describe('PluginMenuComponent', () => {
  let component: PluginMenuComponent;
  let fixture: ComponentFixture<PluginMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PluginMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PluginMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
