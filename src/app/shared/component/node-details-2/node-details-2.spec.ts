import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeDetails2 } from './node-details-2';

describe('NodeDetails2', () => {
  let component: NodeDetails2;
  let fixture: ComponentFixture<NodeDetails2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NodeDetails2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NodeDetails2);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
