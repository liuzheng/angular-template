import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageTerminalComponent } from './terminal.component';

describe('PageTerminalComponent', () => {
  let component: PageTerminalComponent;
  let fixture: ComponentFixture<PageTerminalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageTerminalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageTerminalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
