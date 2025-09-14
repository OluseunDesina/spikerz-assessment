import { Component, signal } from '@angular/core';
import { UiCard } from '../ui-card/ui-card';

@Component({
  selector: 'app-remidiation',
  imports: [UiCard],
  templateUrl: './remidiation.html',
  styleUrl: './remidiation.scss',
})
export class Remidiation {
  readonly expanded = signal(false);

  toggleExpanded(): void {
    this.expanded.update((v) => !v);
  }
}
