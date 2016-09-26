import {Component} from 'angular2/core';
import {JuneComponent} from './june.component';
import {JuneService} from 'app/event.services'
import {OnInit} from 'angular2/core';

@Component({
    selector: 'june-list',
    template: `

                <div class="month">
                  <ul>
                        <li>
                      June<br>
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
                  <li *ngFor="#june of june " (click)="onSelect(june )"
                      [class.clicked]="selectedEvent === june "> {{june.date}} 
                  </li>

                </ul>

                <june *ngIf="selectedEvent !== null" [june ]="selectedEvent"></june >
    `,
    directives: [JuneComponent],
    providers: [JuneService],
    styleUrls: ["a2/css/style.css"]
})

export class JuneListComponent implements OnInit{

        constructor (private _juneService: JuneService){}

        ngOnInit():any{
                this.getEvents();
        }

        public june: June[];


        public selectedEvent = null;

        public onSelect(june)
        {
                this.selectedEvent = june;
        }

        getEvents(){
                this._juneService.getEvents().then((june: June[]) => this.june = june);
        }

        }
                 

