import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleContextMenuComponent } from './context-menu.component';

describe('ExampleContextMenuComponent', () => {
  let component: ExampleContextMenuComponent;
  let fixture: ComponentFixture<ExampleContextMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleContextMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleContextMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
