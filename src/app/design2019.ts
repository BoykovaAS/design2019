import {NgModule} from '@angular/core';

import {HttpClientModule } from '@angular/common/http';

import {HttpClient} from '@angular/common/http';

import { MarkdownModule } from 'ngx-markdown';


@NgModule({
    imports: [
        HttpClientModule, MarkdownModule.forRoot({ loader: HttpClient })
        ],
    exports: [
        HttpClientModule, MarkdownModule
        ]
  })
  export class Design2019Module { }



