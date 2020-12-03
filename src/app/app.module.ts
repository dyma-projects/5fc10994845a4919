import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Exercice2Component } from './exercice2/exercice2.component';
import { Exerice1Component } from './exerice1/exerice1.component';
import { Exerice3Component } from './exerice3/exerice3.component';

@NgModule({
  declarations: [
    AppComponent,
    Exercice2Component,
    Exerice1Component,
    Exerice3Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
