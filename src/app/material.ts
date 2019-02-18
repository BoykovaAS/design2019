import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion'
import {NgModule} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, HttpClientModule, MatExpansionModule, MatCardModule],
  exports: [MatButtonModule, MatCheckboxModule, MatToolbarModule, HttpClientModule, MatExpansionModule, MatCardModule]
})
export class MaterialModule { }