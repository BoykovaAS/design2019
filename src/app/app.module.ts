import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MaterialModule} from './material';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { LabComponent } from './lab/lab.component'
import { Design2019Module } from './design2019';
import { ReferatComponent } from './referat/referat.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    LabComponent,
    ReferatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    Design2019Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
