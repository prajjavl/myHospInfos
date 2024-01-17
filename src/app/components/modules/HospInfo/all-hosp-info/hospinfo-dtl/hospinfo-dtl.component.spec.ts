import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospinfoDtlComponent } from './hospinfo-dtl.component';

describe('HospinfoDtlComponent', () => {
  let component: HospinfoDtlComponent;
  let fixture: ComponentFixture<HospinfoDtlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HospinfoDtlComponent]
    });
    fixture = TestBed.createComponent(HospinfoDtlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
