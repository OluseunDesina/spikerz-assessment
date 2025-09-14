import { Component } from '@angular/core';
import { PageTitle } from '../page-title/page-title';

@Component({
  selector: 'app-text-card',
  imports: [PageTitle],
  templateUrl: './text-card.html',
  styleUrl: './text-card.scss',
})
export class TextCard {}
