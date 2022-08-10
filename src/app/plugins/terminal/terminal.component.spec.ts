import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PluginTerminalComponent } from './terminal.component';

describe('PluginTerminalComponent', () => {
  let component: PluginTerminalComponent;
  let fixture: ComponentFixture<PluginTerminalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PluginTerminalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PluginTerminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
