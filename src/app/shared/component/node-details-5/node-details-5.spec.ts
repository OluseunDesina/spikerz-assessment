import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeDetails5 } from './node-details-5';

describe('NodeDetails5', () => {
  let component: NodeDetails5;
  let fixture: ComponentFixture<NodeDetails5>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NodeDetails5]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NodeDetails5);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
