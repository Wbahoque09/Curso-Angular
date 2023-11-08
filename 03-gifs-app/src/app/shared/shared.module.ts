import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebardComponent } from './components/sidebard/sidebard.component';



@NgModule({
  declarations: [
    SidebardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SidebardComponent
  ]
})
export class SharedModule { }
