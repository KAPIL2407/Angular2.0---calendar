import {Component} from 'angular2/core';
import {JanuaryComponent} from './january.component';
import {JanuaryService} from 'app/event.services'
import {OnInit} from 'angular2/core';

@Component({
    selector: 'january-list',
    template: `

                <div class="month">
                  <ul>
                        <li>
                      January<br>
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
                  <li *ngFor="#january of january " (click)="onSelect(january )"
                      [class.clicked]="selectedEvent === january "> {{january .date}} 
                  </li>

                </ul>

                <january  *ngIf="selectedEvent !== null" [january ]="selectedEvent"></january >
    `,
    directives: [JanuaryComponent],
    providers: [JanuaryService],
    styleUrls: ["a2/css/style.css"]
})

export class JanuaryListComponent implements OnInit{

        constructor (private _januaryService: JanuaryService){}

        ngOnInit():any{
                this.getEvents();
        }

        public january: January[];


        public selectedEvent = null;

        public onSelect(january)
        {
                this.selectedEvent = january;
        }

        getEvents(){
                this._januaryService.getEvents().then((january: January[]) => this.january = january);
        }

        }
                 

              