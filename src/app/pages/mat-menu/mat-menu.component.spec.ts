import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMatMenuComponent } from './mat-menu.component';

describe('PageMatMenuComponent', () => {
  let component: PageMatMenuComponent;
  let fixture: ComponentFixture<PageMatMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageMatMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMatMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
