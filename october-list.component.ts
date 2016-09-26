import {Component} from 'angular2/core';
import {OctoberComponent} from './october.component';
import {OctoberService} from 'app/event.services'
import {OnInit} from 'angular2/core';

@Component({
    selector: 'october-list',
    template: `

                <div class="month">
                  <ul>
                        <li>
                      October<br>
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
                  <li *ngFor="#october of october " (click)="onSelect(october)"
                     [class.clicked]="selectedEvent === october "> {{october.date}} 
                  </li>

                </ul>

                  <october  *ngIf="selectedEvent !== null" [october ]="selectedEvent"></october>
    `,
    directives: [OctoberComponent],
    providers: [OctoberService],
    styleUrls: ["a2/css/style.css"]
})

export class OctoberListComponent implements OnInit{

        constructor (private _octoberService: OctoberService){}

        ngOnInit():any{
                this.getEvents();
        }

        public october: October[];


        public selectedEvent = null;

        public onSelect(october)
        {
                this.selectedEvent = october;
        }

        getEvents(){
                this._octoberService.getEvents().then((october: October[]) => this.october = october);
        }

        }

                
