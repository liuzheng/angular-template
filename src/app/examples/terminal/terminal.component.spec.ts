import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleTerminalComponent } from './terminal.component';

describe('ExampleTerminalComponent', () => {
  let component: ExampleTerminalComponent;
  let fixture: ComponentFixture<ExampleTerminalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleTerminalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleTerminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
