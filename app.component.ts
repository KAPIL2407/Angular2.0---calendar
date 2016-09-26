import {Component} from '@angular/core'


import {ROUTER_DIRECTIVES} from 'angular2/router';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {RouteConfig} from 'angular2/router';
import {HomeComponent} from './home.component';



@Component({
  selector: 'my-app',
  providers: [],
  template: `
     <b>Angular 2 </b>

       <div>
        <a [routerLink]="['HOME']">HOME</a>
        </div>
        <br>

        <a [routerLink]="['JANUARY']"> JANUARY |</a>


    `
})


export class AppComponent {
  
  constructor() {
  }


}