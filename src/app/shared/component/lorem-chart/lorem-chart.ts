import { Component, ViewChildren, QueryList, OnDestroy } from '@angular/core';
import { NodeDetails } from '../node-details/node-details';
import { TooltipModule } from 'primeng/tooltip';
import { PopoverModule } from 'primeng/popover';
import { NodeDetails5 } from '../node-details-5/node-details-5';
import { NodeDetails4 } from '../node-details-4/node-details-4';
import { NodeDetails3 } from '../node-details-3/node-details-3';
import { NodeDetails2 } from '../node-details-2/node-details-2';
import { Popover } from 'primeng/popover';
@Component({
  selector: 'app-lorem-chart',
  imports: [
    NodeDetails,
    TooltipModule,
    PopoverModule,
    NodeDetails5,
    NodeDetails4,
    NodeDetails3,
    NodeDetails2,
  ],
  templateUrl: './lorem-chart.html',
  styleUrl: './lorem-chart.scss',
})
export class LoremChart implements OnDestroy {
  @ViewChildren(Popover) popovers!: QueryList<Popover>;
  private hideTimers = new WeakMap<Popover, number>();
  private allTimers: number[] = [];

  private closeAllExcept(active?: Popover) {
    if (!this.popovers) return;
    this.popovers.forEach((p) => {
      if (p !== active) {
        try {
          p.hide();
        } catch {
          // noop: popover may already be hidden or not yet initialized
        }
      }
    });
  }

  onEnter(event: MouseEvent, pop: Popover) {
    // cancel any scheduled hide for this specific popover
    const pending = this.hideTimers.get(pop);
    if (pending) {
      clearTimeout(pending);
      this.hideTimers.delete(pop);
    }
    // show only this one
    this.closeAllExcept(pop);
    try {
      pop.show(event);
    } catch {
      // noop: popover may already be hidden or not yet initialized
    }
  }

  onLeave(pop: Popover) {
    // slight delay to allow moving pointer into the tooltip without flicker
    const t = setTimeout(() => {
      try {
        pop.hide();
      } catch {
        // noop: popover may already be hidden or not yet initialized
      }
      this.hideTimers.delete(pop);
    }, 120);
    this.hideTimers.set(pop, t);
    this.allTimers.push(t);
  }

  ngOnDestroy(): void {
    // Clear all pending timers safely
    for (const t of this.allTimers) {
      try {
        clearTimeout(t);
      } catch {
        // noop: timer may already be cleared or invalid
      }
    }
    this.allTimers = [];
  }
}
