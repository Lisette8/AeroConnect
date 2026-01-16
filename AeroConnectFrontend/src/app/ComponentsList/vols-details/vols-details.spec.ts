import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolsDetails } from './vols-details';

describe('VolsDetails', () => {
  let component: VolsDetails;
  let fixture: ComponentFixture<VolsDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VolsDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VolsDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
