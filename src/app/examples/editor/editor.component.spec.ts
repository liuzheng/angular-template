import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleEditorComponent } from './editor.component';

describe('ExampleEditorComponent', () => {
  let component: ExampleEditorComponent;
  let fixture: ComponentFixture<ExampleEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleEditorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
