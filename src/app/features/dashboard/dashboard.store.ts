import { Injectable, computed, effect, signal } from '@angular/core';

export interface GraphNode {
  id: string;
  label: string;
  ip?: string;
  risk?: 'critical' | 'high' | 'medium' | 'low';
}
export interface GraphEdge {
  id: string;
  source: string;
  target: string;
}
export interface Asset {
  id: string;
  name: string;
  ip: string;
  risk: 'critical' | 'high' | 'medium' | 'low';
}

@Injectable({ providedIn: 'root' })
export class DashboardStore {
  // graph
  private _nodes = signal<GraphNode[]>([]);
  private _edges = signal<GraphEdge[]>([]);
  // ui state
  selectedNodeId = signal<string | null>(null);
  popoverPosition = signal<{ x: number; y: number } | null>(null);

  // assets and counts
  private _assets = signal<Asset[]>([]);
  riskCounts = computed(() => {
    const a = this._assets();
    return {
      critical: a.filter((x) => x.risk === 'critical').length,
      high: a.filter((x) => x.risk === 'high').length,
      medium: a.filter((x) => x.risk === 'medium').length,
      low: a.filter((x) => x.risk === 'low').length,
    };
  });

  nodes = computed(() => this._nodes());
  edges = computed(() => this._edges());
  assets = computed(() => this._assets());
  selectedNode = computed(() =>
    this._nodes().find((n) => n.id === this.selectedNodeId())
  );

  // actions
  loadInitial() {
    this._nodes.set([
      { id: 'n1', label: 'Loremipsumm', risk: 'critical' },
      { id: 'n2', label: 'Loremipsu', risk: 'high' },
      { id: 'n3', label: 'Loremipsu', risk: 'medium' },
      { id: 'n4', label: 'Loremipsu', ip: '192.168.1.1', risk: 'critical' },
      { id: 'n5', label: 'Loremipsu002', ip: '192.168.1.2', risk: 'critical' },
    ]);
    this._edges.set([
      { id: 'e1', source: 'n1', target: 'n2' },
      { id: 'e2', source: 'n2', target: 'n3' },
      { id: 'e3', source: 'n3', target: 'n4' },
      { id: 'e4', source: 'n3', target: 'n5' },
    ]);
    this._assets.set([
      {
        id: 'a1',
        name: 'Loremipsumdolorsit',
        ip: '192.168.1.1',
        risk: 'critical',
      },
      {
        id: 'a2',
        name: 'Loremipsumdolorsit002',
        ip: '192.168.1.2',
        risk: 'critical',
      },
    ]);
  }

  selectNode(id: string | null, pos?: { x: number; y: number }) {
    this.selectedNodeId.set(id);
    this.popoverPosition.set(id && pos ? pos : null);
  }

  constructor() {
    effect(() => {
      // Example side effect: log selection (or persist to storage)
      const sel = this.selectedNode();
      if (sel) console.debug('Selected node:', sel.id);
    });
  }
}
