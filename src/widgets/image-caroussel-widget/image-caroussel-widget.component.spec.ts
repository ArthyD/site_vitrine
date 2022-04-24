import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCarousselWidgetComponent } from './image-caroussel-widget.component';

describe('ImageCarousselWidgetComponent', () => {
  let component: ImageCarousselWidgetComponent;
  let fixture: ComponentFixture<ImageCarousselWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageCarousselWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageCarousselWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
