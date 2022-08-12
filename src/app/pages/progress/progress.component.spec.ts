import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageProgressComponent } from './progress.component';

describe('PageProgressComponent', () => {
  let component: PageProgressComponent;
  let fixture: ComponentFixture<PageProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageProgressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
