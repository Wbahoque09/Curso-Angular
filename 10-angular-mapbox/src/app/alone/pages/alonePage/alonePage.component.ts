import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-alone-page',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './alonePage.component.html',
  styleUrls: ['./alonePage.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlonePageComponent { }
