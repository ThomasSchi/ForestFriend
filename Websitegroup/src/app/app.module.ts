import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PflanzenComponent } from './pflanzen/pflanzen.component';
import { TipsTricksComponent } from './tips-tricks/tips-tricks.component';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    HomepageComponent,
    PflanzenComponent,
    TipsTricksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
