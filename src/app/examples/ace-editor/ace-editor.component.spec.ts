import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleAceEditorComponent } from './ace-editor.component';

describe('ExampleAceEditorComponent', () => {
  let component: ExampleAceEditorComponent;
  let fixture: ComponentFixture<ExampleAceEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExampleAceEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleAceEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
