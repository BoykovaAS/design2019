import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import {MaterialModule} from './material';
import { LabComponent } from './lab/lab.component'
import { Design2019Module } from './design2019';
import { ReferatComponent } from './referat/referat.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    LabComponent,
    ReferatComponent,
    HomeComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    Design2019Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
