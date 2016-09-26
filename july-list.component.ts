import {Component} from 'angular2/core';
import {JulyComponent} from './july.component';
import {JulyService} from 'app/event.services'
import {OnInit} from 'angular2/core';

@Component({
    selector: 'july-list',
    template: `

                <div class="month">
                  <ul>
                        <li>
                      July<br>
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
                  <li *ngFor="#july of july" (click)="onSelect(july)"
                     [class.clicked]="selectedEvent ===july"> {{july.date}} 
                  </li>

                </ul>

                  <july *ngIf="selectedEvent !== null" [july]="selectedEvent"></july>
    `,
    directives: [JulyComponent],
    providers: [JulyService],
    styleUrls: ["a2/css/style.css"]
})

export class JulyListComponent implements OnInit{

        constructor (private _julyService: JulyService){}

        ngOnInit():any{
                this.getEvents();
        }

        public july: July[];


        public selectedEvent = null;

        public onSelect(july)
        {
                this.selectedEvent = july;
        }

        getEvents(){
                this._julyService.getEvents().then((july: July[]) => this.july = july);
        }

        }

                 
                 

                