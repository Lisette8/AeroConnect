import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolsCreation } from './vols-creation';

describe('VolsCreation', () => {
  let component: VolsCreation;
  let fixture: ComponentFixture<VolsCreation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VolsCreation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VolsCreation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
