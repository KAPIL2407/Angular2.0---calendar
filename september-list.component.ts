import {Component} from 'angular2/core';
import {SeptemberComponent} from './september.component';
import {SeptemberService} from 'app/event.services'
import {OnInit} from 'angular2/core';

@Component({
    selector: 'september-list',
    template: `

                <div class="month">
                  <ul>
                        <li>
                      September<br>
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
                  <li *ngFor="#september of september " (click)="onSelect(september)"
                     [class.clicked]="selectedEvent === september "> {{september.date}} 
                  </li>

                </ul>

                  <september *ngIf="selectedEvent !== null" [september ]="selectedEvent"></september>
    `,
    directives: [SeptemberComponent],
    providers: [SeptemberService],
    styleUrls: ["a2/css/style.css"]
})

export class SeptemberListComponent implements OnInit{

        constructor (private _septemberService: SeptemberService){}

        ngOnInit():any{
                this.getEvents();
        }

        public september: September[];


        public selectedEvent = null;

        public onSelect(september)
        {
                this.selectedEvent = september;
        }

        getEvents(){
                this._septemberService.getEvents().then((september: September[]) => this.september = september);
        }

        }

