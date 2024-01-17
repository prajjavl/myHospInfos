import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospMasterComponent } from './hosp-master.component';

describe('HospMasterComponent', () => {
  let component: HospMasterComponent;
  let fixture: ComponentFixture<HospMasterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HospMasterComponent]
    });
    fixture = TestBed.createComponent(HospMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
