import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LabComponent} from "./lab/lab.component"
import { ReferatComponent } from './referat/referat.component';

const routes: Routes = [
  { path: '', redirectTo: '/labs', pathMatch: 'full' },
  { path: 'labs', component: LabComponent},
  { path: 'referat', component: ReferatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
