import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolsUpdate } from './vols-update';

describe('VolsUpdate', () => {
  let component: VolsUpdate;
  let fixture: ComponentFixture<VolsUpdate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VolsUpdate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VolsUpdate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
