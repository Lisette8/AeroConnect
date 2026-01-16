import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vols } from './vols';

describe('Vols', () => {
  let component: Vols;
  let fixture: ComponentFixture<Vols>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Vols]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vols);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
