import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpHeaderResponse } from '@angular/common/http';

@Component({
  selector: 'app-lab',
  templateUrl: './lab.component.html',
  styleUrls: ['./lab.component.scss']
})
export class LabComponent implements OnInit {

  constructor(http: HttpClient) { 
    //http.get.
  }

  ngOnInit() {
  }

}
