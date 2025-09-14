import { Component } from '@angular/core';
import { UiCard } from '../../shared/component/ui-card/ui-card';
import { TextCard } from '../../shared/component/text-card/text-card';
import { KeyValueList } from '../../shared/component/key-value-list/key-value-list';
import { Remidiation } from '../../shared/component/remidiation/remidiation';
import { PageTitle } from '../../shared/component/page-title/page-title';
import { Assets } from '../../shared/component/assets/assets';
import { RiskChart } from '../../shared/component/risk-chart/risk-chart';
import { LoremChart } from '../../shared/component/lorem-chart/lorem-chart';

@Component({
  selector: 'app-dashboard',
  imports: [
    UiCard,
    TextCard,
    KeyValueList,
    Remidiation,
    PageTitle,
    Assets,
    RiskChart,
    LoremChart,
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  riskArray = [
    { name: 'Critical', value: 2, color: '#B91C1C' },
    { name: 'High', value: 0, color: '#F97316' },
    { name: 'Medium', value: 0, color: '#EAB308' },
    { name: 'Low', value: 0, color: '#16A34A' },
  ];
}
