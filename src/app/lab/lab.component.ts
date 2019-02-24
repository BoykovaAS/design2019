import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { LABS } from '../labs-list'

@Component({
  selector: 'app-lab',
  templateUrl: './lab.component.html',
  styleUrls: ['./lab.component.scss'], encapsulation: ViewEncapsulation.None
})
export class LabComponent implements OnInit {

  labs = LABS

  constructor() { 
    
  }

  ngOnInit() {
  }

}
