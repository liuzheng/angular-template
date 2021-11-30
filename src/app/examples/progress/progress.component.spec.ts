import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleProgressComponent } from './progress.component';

describe('ExampleProgressComponent', () => {
  let component: ExampleProgressComponent;
  let fixture: ComponentFixture<ExampleProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleProgressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
