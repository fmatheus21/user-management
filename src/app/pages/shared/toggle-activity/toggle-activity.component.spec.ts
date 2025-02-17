import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleActivityComponent } from './toggle-activity.component';

describe('ToggleActivityComponent', () => {
  let component: ToggleActivityComponent;
  let fixture: ComponentFixture<ToggleActivityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToggleActivityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
