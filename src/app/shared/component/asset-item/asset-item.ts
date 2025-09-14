import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AssetRow, RiskLevel } from '../assets/assets';

@Component({
  selector: 'app-asset-item',
  imports: [NgClass],
  templateUrl: './asset-item.html',
  styleUrl: './asset-item.scss',
})
export class AssetItem {
  @Input() row: AssetRow | null = null;
  riskClasses(risk: RiskLevel): string {
    switch (risk) {
      case 'Critical':
        return 'bg-red-100 text-red-800';
      case 'High':
        return 'bg-orange-100 text-orange-700';
      case 'Medium':
        return 'bg-amber-100 text-amber-700';
      default:
        return 'bg-emerald-100 text-emerald-700';
    }
  }
}
