import { Component, Input } from '@angular/core';
import { Region } from '../../interfaces/region';
import { Capital } from '../../interfaces/capital';

@Component({
  selector: 'countries-region-table',
  templateUrl: './region-table.component.html',
  styles: [
    `
      img {
        width: 25px;
      }
    `,
  ],
})
export class RegionTableComponent {
  @Input()
  public regiones: Capital[] = [];
}
