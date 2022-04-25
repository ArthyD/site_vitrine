import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuriteCloudComponent } from './securite-cloud.component';

describe('SecuriteCloudComponent', () => {
  let component: SecuriteCloudComponent;
  let fixture: ComponentFixture<SecuriteCloudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecuriteCloudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecuriteCloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
