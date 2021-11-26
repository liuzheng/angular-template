import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartContextMenuComponent } from './context-menu.component';

describe('PartContextMenuComponent', () => {
  let component: PartContextMenuComponent;
  let fixture: ComponentFixture<PartContextMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartContextMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PartContextMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
