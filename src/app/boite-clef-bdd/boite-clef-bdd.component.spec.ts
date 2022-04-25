import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoiteClefBddComponent } from './boite-clef-bdd.component';

describe('BoiteClefBddComponent', () => {
  let component: BoiteClefBddComponent;
  let fixture: ComponentFixture<BoiteClefBddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoiteClefBddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoiteClefBddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
