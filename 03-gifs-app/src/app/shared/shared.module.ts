import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebardComponent } from './components/sidebard/sidebard.component';
import { LazyImageComponent } from './components/lazyImage/lazyImage.component';



@NgModule({
  declarations: [SidebardComponent, LazyImageComponent],
  imports: [CommonModule],
  exports: [SidebardComponent, LazyImageComponent],
})
export class SharedModule {}
