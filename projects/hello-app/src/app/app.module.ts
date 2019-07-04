import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedToolsModule } from 'shared-tools';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    SharedToolsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
