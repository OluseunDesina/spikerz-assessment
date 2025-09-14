import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ui-card',
  imports: [NgClass],
  templateUrl: './ui-card.html',
  styleUrl: './ui-card.scss',
})
export class UiCard {
  @Input() inputClass = '';
}
