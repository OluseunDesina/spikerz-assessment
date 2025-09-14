import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetItem } from './asset-item';

describe('AssetItem', () => {
  let component: AssetItem;
  let fixture: ComponentFixture<AssetItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AssetItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssetItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
