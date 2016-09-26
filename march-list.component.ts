import {Component} from 'angular2/core';
import {MarchComponent} from './march.component';
import {MarchService} from 'app/event.services'
import {OnInit} from 'angular2/core';

@Component({
    selector: 'march-list',
    template: `

                <div class="month">
                  <ul>
                        <li>
                      marchbr>
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
                  <li *ngFor="#march of march" (click)="onSelect(march)"
                      [class.clicked]="selectedEvent === march"> {{march.date}} 
                  </li>

                </ul>

                <march *ngIf="selectedEvent !== null" [march]="selectedEvent"></march>
    `,
    directives: [MarchComponent],
    providers: [MarchService],
    styleUrls: ["a2/css/style.css"]
})

export class MarchListComponent implements OnInit{

        constructor (private _marchService: MarchService){}

        ngOnInit():any{
                this.getEvents();
        }

        public march : March[];


        public selectedEvent = null;

        public onSelect(march)
        {
                this.selectedEvent = march;
        }

        getEvents(){
                this._marchService.getEvents().then((march: march[]) => this.march = march);
        }

        }
                 
