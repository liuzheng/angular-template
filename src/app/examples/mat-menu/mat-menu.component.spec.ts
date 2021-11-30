import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleMatMenuComponent } from './mat-menu.component';

describe('ExampleMatMenuComponent', () => {
  let component: ExampleMatMenuComponent;
  let fixture: ComponentFixture<ExampleMatMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleMatMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleMatMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
