import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularColorPickerApComponent } from './angular-color-picker-ap.component';

describe('AngularColorPickerApComponent', () => {
  let component: AngularColorPickerApComponent;
  let fixture: ComponentFixture<AngularColorPickerApComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularColorPickerApComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularColorPickerApComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
