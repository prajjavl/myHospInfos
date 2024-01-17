import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHospInfoComponent } from './update-hosp-info.component';

describe('UpdateHospInfoComponent', () => {
  let component: UpdateHospInfoComponent;
  let fixture: ComponentFixture<UpdateHospInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateHospInfoComponent]
    });
    fixture = TestBed.createComponent(UpdateHospInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
