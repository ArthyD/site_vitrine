import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StagePremiereAnneeComponent } from './stage-premiere-annee.component';

describe('StagePremiereAnneeComponent', () => {
  let component: StagePremiereAnneeComponent;
  let fixture: ComponentFixture<StagePremiereAnneeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StagePremiereAnneeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StagePremiereAnneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
