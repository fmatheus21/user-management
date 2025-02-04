import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRecoverPasswordComponent } from './form-recover-password.component';

describe('FormRecoverPasswordComponent', () => {
  let component: FormRecoverPasswordComponent;
  let fixture: ComponentFixture<FormRecoverPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormRecoverPasswordComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormRecoverPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
