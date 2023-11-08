import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebard',
  templateUrl: './sidebard.component.html',
  styleUrls: ['./sidebard.component.css']
})
export class SidebardComponent {

  constructor ( private gifsService: GifsService ) {}

  get dataTags() {
    return this.gifsService.tagsHistory;
  }

}
