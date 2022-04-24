import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionWidgetComponent } from './suggestion-widget.component';

describe('SuggestionWidgetComponent', () => {
  let component: SuggestionWidgetComponent;
  let fixture: ComponentFixture<SuggestionWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuggestionWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestionWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
