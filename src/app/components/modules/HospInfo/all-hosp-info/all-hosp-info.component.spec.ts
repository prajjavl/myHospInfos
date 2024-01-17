import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllHospInfoComponent } from './all-hosp-info.component';

describe('AllHospInfoComponent', () => {
  let component: AllHospInfoComponent;
  let fixture: ComponentFixture<AllHospInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllHospInfoComponent]
    });
    fixture = TestBed.createComponent(AllHospInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
