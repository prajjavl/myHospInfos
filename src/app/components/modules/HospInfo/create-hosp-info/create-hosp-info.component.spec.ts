import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHospInfoComponent } from './create-hosp-info.component';

describe('CreateHospInfoComponent', () => {
  let component: CreateHospInfoComponent;
  let fixture: ComponentFixture<CreateHospInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateHospInfoComponent]
    });
    fixture = TestBed.createComponent(CreateHospInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
