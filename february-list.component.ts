import {Component} from 'angular2/core';
import {FebruaryComponent} from './february.component';
import {FebruaryService} from 'app/event.services'
import {OnInit} from 'angular2/core';

@Component({
    selector: 'february-list',
    template: `

                <div class="month">
                  <ul>
                        <li>
                      February<br>
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
                  <li *ngFor="#february of february" (click)="onSelect(february)"
                     [class.clicked]="selectedEvent === april"> {{april.date}} 
                  </li>

                </ul>

                  <february *ngIf="selectedEvent !== null" [february]="selectedEvent"></february>
    `,
    directives: [FebruaryComponent],
    providers: [FebruaryService],
    styleUrls: ["a2/css/style.css"]
})

export class FebruaryListComponent implements OnInit{

        constructor (private _februaryService: FebruaryService){}

        ngOnInit():any{
                this.getEvents();
        }

        public february: February[];


        public selectedEvent = null;

        public onSelect(february)
        {
                this.selectedEvent = february;
        }

        getEvents(){
                this._februaryService.getEvents().then((february: February[]) => this.february = february);
        }

        }

                 

               