import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Remidiation } from './remidiation';

describe('Remidiation', () => {
  let component: Remidiation;
  let fixture: ComponentFixture<Remidiation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Remidiation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Remidiation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
