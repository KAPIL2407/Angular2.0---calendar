import {Component} from 'angular2/core';
import {AugustComponent} from './august.component';
import {AugustService} from 'app/event.services'
import {OnInit} from 'angular2/core';

@Component({
    selector: 'august-list',
    template: `

                <div class="month">
                  <ul>
                        <li>
                      August<br>
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
                  <li *ngFor="#august of august" (click)="onSelect(august)"
                      [class.clicked]="selectedEvent === august"> {{august.date}} 
                  </li>

                </ul>

                <august *ngIf="selectedEvent !== null" [august]="selectedEvent"></august>
    `,
    directives: [AugustComponent],
    providers: [AugustService],
    styleUrls: ["a2/css/style.css"]
})

export class AugustListComponent implements OnInit{

        constructor (private _augustService: AugustService){}

        ngOnInit():any{
                this.getEvents();
        }

        public august: August[];


        public selectedEvent = null;

        public onSelect(august)
        {
                this.selectedEvent = august;
        }

        getEvents(){
                this._augustService.getEvents().then((august: August[]) => this.august = august);
        }

        }
                 

          