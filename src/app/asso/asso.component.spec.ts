import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssoComponent } from './asso.component';

describe('AssoComponent', () => {
  let component: AssoComponent;
  let fixture: ComponentFixture<AssoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
