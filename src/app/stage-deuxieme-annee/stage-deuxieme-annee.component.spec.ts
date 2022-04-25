import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StageDeuxiemeAnneeComponent } from './stage-deuxieme-annee.component';

describe('StageDeuxiemeAnneeComponent', () => {
  let component: StageDeuxiemeAnneeComponent;
  let fixture: ComponentFixture<StageDeuxiemeAnneeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StageDeuxiemeAnneeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StageDeuxiemeAnneeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
