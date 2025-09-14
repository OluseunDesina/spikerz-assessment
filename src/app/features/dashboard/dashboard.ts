import { Component } from '@angular/core';
import { UiCard } from '../../shared/component/ui-card/ui-card';
import { TextCard } from '../../shared/component/text-card/text-card';
import { KeyValueList } from '../../shared/component/key-value-list/key-value-list';
import { Remidiation } from '../../shared/component/remidiation/remidiation';
import { PageTitle } from '../../shared/component/page-title/page-title';
import { Assets } from '../../shared/component/assets/assets';

@Component({
  selector: 'app-dashboard',
  imports: [UiCard, TextCard, KeyValueList, Remidiation, PageTitle, Assets],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {}
