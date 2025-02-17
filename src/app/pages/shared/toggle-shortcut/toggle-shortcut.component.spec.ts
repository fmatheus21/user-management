import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToggleShortcutComponent } from './toggle-shortcut.component';

describe('ToggleShortcutComponent', () => {
  let component: ToggleShortcutComponent;
  let fixture: ComponentFixture<ToggleShortcutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToggleShortcutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToggleShortcutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
