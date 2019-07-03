import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedToolsModule } from 'shared-tools';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedToolsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
