import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lazy-image',
  // standalone: true,
  templateUrl: `./lazy-image.component.html`,
  styleUrls: ['./lazyImage.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LazyImageComponent {}
