import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReglesComponent } from './regles/regles.component';
import { MainsComponent } from './mains/mains.component';

@NgModule({
  declarations: [
    AppComponent,
    ReglesComponent,
    MainsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
