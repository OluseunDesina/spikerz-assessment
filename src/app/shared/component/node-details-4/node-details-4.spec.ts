import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeDetails4 } from './node-details-4';

describe('NodeDetails4', () => {
  let component: NodeDetails4;
  let fixture: ComponentFixture<NodeDetails4>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NodeDetails4]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NodeDetails4);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
