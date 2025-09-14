import { Component } from '@angular/core';
import { NodeDetails } from '../node-details/node-details';
import { TooltipModule } from 'primeng/tooltip';
import { PopoverModule } from 'primeng/popover';
import { NodeDetails5 } from '../node-details-5/node-details-5';
import { NodeDetails4 } from '../node-details-4/node-details-4';
import { NodeDetails3 } from '../node-details-3/node-details-3';
import { NodeDetails2 } from '../node-details-2/node-details-2';
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
export class LoremChart {}
