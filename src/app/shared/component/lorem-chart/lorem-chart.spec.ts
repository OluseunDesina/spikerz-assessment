import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoremChart } from './lorem-chart';

describe('LoremChart', () => {
  let component: LoremChart;
  let fixture: ComponentFixture<LoremChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoremChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoremChart);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
