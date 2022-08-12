import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMetroUIComponent } from './metroui.component';

describe('PageMetroUIComponent', () => {
  let component: PageMetroUIComponent;
  let fixture: ComponentFixture<PageMetroUIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageMetroUIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMetroUIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
