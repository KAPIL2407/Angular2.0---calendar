import {Component} from 'angular2/core';
import {NovemberComponent} from './november.component';
import {NovemberService} from 'app/event.services'
import {OnInit} from 'angular2/core';

@Component({
    selector: 'november-list',
    template: `

                <div class="month">
                  <ul>
                        <li>
                      November<br>
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
                  <li *ngFor="#november of november " (click)="onSelect(november )"
                      [class.clicked]="selectedEvent === november "> {{november.date}} 
                  </li>

                </ul>

                <november *ngIf="selectedEvent !== null" [november ]="selectedEvent"></november >
    `,
    directives: [NovemberComponent],
    providers: [NovemberService],
    styleUrls: ["a2/css/style.css"]
})

export class NovemberListComponent implements OnInit{

        constructor (private _novemberService: NovemberService){}

        ngOnInit():any{
                this.getEvents();
        }

        public november: November[];


        public selectedEvent = null;

        public onSelect(november)
        {
                this.selectedEvent = november;
        }

        getEvents(){
                this._novemberService.getEvents().then((november: november[]) => this.november= november);
        }

        }
                 
