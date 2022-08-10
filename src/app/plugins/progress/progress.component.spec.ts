import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PluginProgressComponent } from './progress.component';

describe('PluginProgressComponent', () => {
  let component: PluginProgressComponent;
  let fixture: ComponentFixture<PluginProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PluginProgressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PluginProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
