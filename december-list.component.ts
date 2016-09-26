import {Component} from 'angular2/core';
import {DecemberComponent} from './december.component';
import {DecemberService} from 'app/event.services'
import {OnInit} from 'angular2/core';

@Component({
    selector: 'december-list',
    template: `

                <div class="month">
                  <ul>
                        <li>
                      december<br>
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
                  <li *ngFor="#december of december" (click)="onSelect(december)"
                      [class.clicked]="selectedEvent === december"> {{december.date}} 
                  </li>

                </ul>

                <december *ngIf="selectedEvent !== null" [december]="selectedEvent"></december>
    `,
    directives: [DecemberComponent],
    providers: [DecemberService],
    styleUrls: ["a2/css/style.css"]
})

export class DecemberListComponent implements OnInit{

        constructor (private _decemberService: DecemberService){}

        ngOnInit():any{
                this.getEvents();
        }

        public december: December[];


        public selectedEvent = null;

        public onSelect(december)
        {
                this.selectedEvent = december;
        }

        getEvents(){
                this._decemberService.getEvents().then((december: December[]) => this.december = december);
        }

        }
                 

            

    

  