import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageContextMenuComponent } from './context-menu.component';

describe('PageContextMenuComponent', () => {
  let component: PageContextMenuComponent;
  let fixture: ComponentFixture<PageContextMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageContextMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageContextMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
