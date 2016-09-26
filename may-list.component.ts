import {Component} from 'angular2/core';
import {MayComponent} from './may.component';
import {MayService} from 'app/event.services'
import {OnInit} from 'angular2/core';

@Component({
    selector: 'may-list',
    template: `

                <div class="month">
                  <ul>
                        <li>
                      May<br>
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
                  <li *ngFor="#may of may " (click)="onSelect(may )"
                      [class.clicked]="selectedEvent === may "> {{may .date}} 
                  </li>

                </ul>

                <may  *ngIf="selectedEvent !== null" [may ]="selectedEvent"></may >
    `,
    directives: [MayComponent],
    providers: [MayService],
    styleUrls: ["a2/css/style.css"]
})

export class MayListComponent implements OnInit{

        constructor (private _mayService: MayService){}

        ngOnInit():any{
                this.getEvents();
        }

        public may: May[];


        public selectedEvent = null;

        public onSelect(may)
        {
                this.selectedEvent = may;
        }

        getEvents(){
                this._mayService.getEvents().then((may: may[]) => this.may = may);
        }

        }
                 
