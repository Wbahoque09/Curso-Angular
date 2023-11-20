import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    SharedModule, // Aqui se expone todo lo que el sharedModule va a exponer en toda la app
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
