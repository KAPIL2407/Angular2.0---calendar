import {Component} from 'angular2/core';
import {AprilComponent} from './april.component';
import {AprilService} from 'app/event.services'

import {OnInit} from 'angular2/core';

@Component({
    selector: 'april-list',
    template: `

                <div class="month">
                  <ul>
                        <li>
                      April<br>
                      <span style="font-size:18px">2016</span>
                    </li>
                  </ul>
                </div>

                <ul class="weekdays">
                  <li>Mo</li>
                  <li>Tu</li>
                  <li>We</li>
                  <li>Th</li>
                  <li>Fr</li>
                  <li>Sa</li>
                  <li>Su</li>
                </ul>

                <ul class="days">
                  <li class="extra_li"></li>
                  <li class="extra_li"></li>
                  <li class="extra_li"></li>
                  <li class="extra_li"></li>
                  <li *ngFor="#april of april" (click)="onSelect(april)"
                     [class.clicked]="selectedEvent === april"> {{april.date}} 
                  </li>

                </ul>

                <april *ngIf="selectedEvent !== null" [april]="selectedEvent"></april>
    `,
    directives: [AprilComponent],
    providers: [AprilService],
    styleUrls: ["a2/css/style.css"]
})

export class AprilListComponent implements OnInit{

        constructor (private _aprilService: AprilService){}

        ngOnInit():any{
                this.getEvents();
        }

        public april: April[];


        public selectedEvent = null;

        public onSelect(april)
        {
                this.selectedEvent = april;
        }

        getEvents(){
                this._aprilService.getEvents().then((april: April[]) => this.april = april);
        }

        }

                 

              