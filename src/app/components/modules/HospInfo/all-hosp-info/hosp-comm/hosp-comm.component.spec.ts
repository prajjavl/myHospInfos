import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HospCommComponent } from './hosp-comm.component';

describe('HospCommComponent', () => {
  let component: HospCommComponent;
  let fixture: ComponentFixture<HospCommComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HospCommComponent]
    });
    fixture = TestBed.createComponent(HospCommComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
