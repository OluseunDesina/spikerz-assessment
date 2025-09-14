import { Component, computed, Input, input, signal } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { UiCard } from '../ui-card/ui-card';

interface RiskChartData {
  name: string;
  value: number;
  color: string;
}
@Component({
  selector: 'app-risk-chart',
  imports: [ChartModule, UiCard],
  templateUrl: './risk-chart.html',
  styleUrl: './risk-chart.scss',
})
export class RiskChart {
  @Input() risksArray: RiskChartData[] = [];
  title = input('Contextual Risk');
  // critical = input(2);
  // high = input(0);
  // medium = input(0);
  // low = input(0);

  // Colors (feel free to map to your @theme tokens)
  private readonly colors = signal({
    critical: '#C6190D',
    high: '#E5372B',
    medium: '#EBA622',
    low: '#08B94E',
    track: '#E5E7EB',
  });

  readonly chartData = computed(() => ({
    labels: ['Critical', 'High', 'Medium', 'Low'],
    datasets: [
      {
        data: this.risksArray.map((item) => item.value),
        backgroundColor: [
          this.colors().critical,
          this.colors().high,
          this.colors().medium,
          this.colors().low,
        ],
        borderWidth: 0,
        hoverOffset: 6,
      },
    ],
  }));

  readonly chartOptions = computed(() => ({
    responsive: true,
    maintainAspectRatio: false,
    cutout: '85%', // donut thickness
    plugins: {
      legend: {
        display: false, // we render our own legend with Tailwind
      },
      tooltip: {
        callbacks: {
          label: (ctx: any) => {
            const label = ctx.label || '';
            const value = ctx.parsed || 0;
            return `${label}: ${value}`;
          },
        },
      },
    },
  }));
}
