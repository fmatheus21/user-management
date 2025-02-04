import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterTermsComponent } from './footer-terms.component';

describe('FooterTermsComponent', () => {
  let component: FooterTermsComponent;
  let fixture: ComponentFixture<FooterTermsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterTermsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
