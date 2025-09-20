import { Component, signal, computed } from '@angular/core';
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
  imports: [UiCard, AssetItem],
  templateUrl: './assets.html',
  styleUrl: './assets.scss',
})
export class Assets {
  readonly assets = signal<AssetRow[]>([
    { name: 'Loremipsumdolorsit', ip: '192.168.1.1', risk: 'Critical' },
    { name: 'Loremipsumdolorsit002', ip: '192.168.1.2', risk: 'Critical' },
    { name: 'Loremipsumdolorsit', ip: '192.168.1.3', risk: 'Critical' },
    { name: 'Loremipsumdolorsit002', ip: '192.168.1.4', risk: 'Critical' },
  ]);

  // Pagination state
  readonly pageSize = signal(2);
  readonly pageIndex = signal(0);

  // Derived values
  readonly total = computed(() => this.assets().length);
  readonly totalPages = computed(() =>
    this.pageSize() > 0
      ? Math.max(1, Math.ceil(this.total() / this.pageSize()))
      : 1
  );

  // Slice the assets for the current page
  readonly displayedAssets = computed(() => {
    const size = Math.max(1, this.pageSize());
    const start = this.pageIndex() * size;
    return this.assets().slice(start, start + size);
  });

  // Navigation availability
  readonly hasPrev = computed(() => this.pageIndex() > 0);
  readonly hasNext = computed(() => this.pageIndex() + 1 < this.totalPages());

  // Handlers
  prevPage() {
    if (this.hasPrev()) this.pageIndex.update((i) => i - 1);
  }

  nextPage() {
    if (this.hasNext()) this.pageIndex.update((i) => i + 1);
  }

  // UI text
  readonly pageText = computed(() => {
    const total = this.total();
    if (total === 0) return 'Showing 0-0 of 0';
    const size = Math.max(1, this.pageSize());
    const start = this.pageIndex() * size;
    const end = Math.min(start + size, total);
    return `Showing ${start + 1}-${end} of ${total}`;
  });
}
