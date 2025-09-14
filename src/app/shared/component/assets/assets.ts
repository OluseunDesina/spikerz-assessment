import { NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';
import { UiCard } from '../ui-card/ui-card';
import { AssetItem } from '../asset-item/asset-item';

export type RiskLevel = 'Low' | 'Medium' | 'High' | 'Critical';

export interface AssetRow {
  name: string;
  ip: string;
  risk: RiskLevel;
}

@Component({
  selector: 'app-assets',
  imports: [NgClass, UiCard, AssetItem],
  templateUrl: './assets.html',
  styleUrl: './assets.scss',
})
export class Assets {
  readonly assets = signal<AssetRow[]>([
    { name: 'Loremipsumdolorsit', ip: '192.168.1.1', risk: 'Critical' },
    { name: 'Loremipsumdolorsit002', ip: '192.168.1.2', risk: 'Critical' },
  ]);

  readonly pageText = signal('Showing 1-2 of 2');
}
