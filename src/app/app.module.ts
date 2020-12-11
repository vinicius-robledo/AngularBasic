import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AdsenseModule } from 'ng2-adsense';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdsenseModule.forRoot({
      adClient: 'ca-pub-5013061457565520',
      adSlot: 7259870550})
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }