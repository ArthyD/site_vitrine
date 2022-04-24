import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerSuggestionWidgetComponent } from './career-suggestion-widget.component';

describe('CareerSuggestionWidgetComponent', () => {
  let component: CareerSuggestionWidgetComponent;
  let fixture: ComponentFixture<CareerSuggestionWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CareerSuggestionWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerSuggestionWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
