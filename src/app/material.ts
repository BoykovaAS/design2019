import {NgModule} from '@angular/core';

import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon'

@NgModule({
  imports: [
    MatButtonModule, 
    MatCheckboxModule, 
    MatToolbarModule,  
    MatExpansionModule, 
    MatCardModule, 
    MatListModule,
    MatSidenavModule, 
    MatGridListModule, 
    MatIconModule],
  exports: [
    MatButtonModule, 
    MatCheckboxModule, 
    MatToolbarModule,
    MatExpansionModule, 
    MatCardModule, 
    MatListModule, 
    MatSidenavModule, 
    MatGridListModule, 
    MatIconModule]
})
export class MaterialModule { }