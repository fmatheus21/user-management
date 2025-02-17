import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleNotificationComponent } from './toggle-notification.component';

describe('ToggleNotificationComponent', () => {
  let component: ToggleNotificationComponent;
  let fixture: ComponentFixture<ToggleNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToggleNotificationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
