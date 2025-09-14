import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeDetails3 } from './node-details-3';

describe('NodeDetails3', () => {
  let component: NodeDetails3;
  let fixture: ComponentFixture<NodeDetails3>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NodeDetails3]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NodeDetails3);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
