import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleMetroUIComponent } from './metroui.component';

describe('ExampleMetroUIComponent', () => {
  let component: ExampleMetroUIComponent;
  let fixture: ComponentFixture<ExampleMetroUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleMetroUIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleMetroUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
