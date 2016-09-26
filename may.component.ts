import {Component} from 'angular2/core';
@Component({
    selector: 'may',
    template: `
        <br>
<div id="calendar-wrap">
            <header>
                <h1>May 2016</h1>
            </header>
            <div id="calendar">
                <ul class="weekdays">
                    <li>Sunday</li>
                    <li>Monday</li>
                    <li>Tuesday</li>
                    <li>Wednesday</li>
                    <li>Thursday</li>
                    <li>Friday</li>
                    <li>Saturday</li>
                </ul>

                <!-- Days from previous month -->

                <ul class="days">
                    <li class="day other-month">
                        <div class="date">25</div>                      
                    </li>
                    <li class="day other-month">
                        <div class="date">26</div>
                        </div>                      
                    </li>
                    <li class="day other-month">
                        <div class="date">27</div>                      
                    </li>
                    <li class="day other-month">
                        <div class="date">28</div>                      
                    </li>
                    <li class="day other-month">
                        <div class="date">29</div>                      
                    </li>
                    <li class="day other-month">
                        <div class="date">30</div>                      
                    </li>
                     <li class="day">
                        <div class="date">1</div>                       
                    </li>
                    
                    <!-- Days in current month -->

                    <!-- Row #2 -->

                <ul class="days">
                    <li class="day">
                        <div class="date">2</div>                       
                    </li>
                    <li class="day">
                        <div class="date">3</div>                       
                    </li>
                    <li class="day">
                        <div class="date">4</div>                       
                    </li>
                    <li class="day">
                        <div class="date">5</div>                       
                    </li>
                    <li class="day">
                        <div class="date">6</div>                      
                    </li>
                    <li class="day">
                        <div class="date">7</div>                       
                    </li>
                    <li class="day">
                        <div class="date">8</div>                       
                    </li>
                </ul>

                    <!-- Row #3 -->

                <ul class="days">
                    <li class="day">
                        <div class="date">9</div>                      
                    </li>
                    <li class="day">
                        <div class="date">10</div>                      
                    </li>
                    <li class="day">
                        <div class="date">11</div>                      
                    </li>
                    <li class="day">
                        <div class="date">12</div>                      
                    </li>
                    <li class="day">
                        <div class="date">13</div>                    
                    </li>
                    <li class="day">
                        <div class="date">14</div>                      
                    </li>
                    <li class="day">
                        <div class="date">15</div>                      
                    </li>
                </ul>

                    <!-- Row #4 -->

                <ul class="days">
                    <li class="day">
                        <div class="date">16</div>                      
                    </li>
                    <li class="day">
                        <div class="date">17</div>                      
                    </li>
                    <li class="day">
                        <div class="date">18</div>                      
                    </li>
                    <li class="day">
                        <div class="date">19</div>                      
                    </li>
                    <li class="day">
                        <div class="date">20</div>                      
                    </li>
                    <li class="day">
                        <div class="date">21</div>            
                    </li>
                    <li class="day">
                        <div class="date">22</div>                      
                    </li>
                </ul>

                        <!-- Row #5 -->

                <ul class="days">
                    <li class="day">
                        <div class="date">23</div>                      
                    </li>
                    <li class="day">
                        <div class="date">24</div>                
                    </li>
                    <li class="day">
                        <div class="date">25</div>                      
                    </li>
                    <li class="day">
                        <div class="date">26</div>                      
                    </li>
                    <li class="day">
                        <div class="date">27</div>                      
                    </li>
                    <li class="day">
                        <div class="date">28</div>                      
                    </li>
                    <li class="day">
                        <div class="date">29</div>                      
                    </li>
                </ul>

                <!-- Row #6 -->

                <ul>
                <li class="day">
                        <div class="date">30</div>                      
                    </li>
                    <li class="day">
                        <div class="date">31</div>                      
                    </li>
                    <li class="day other-month">
                        <div class="date">1</div> <!-- Next Month -->                       
                    </li>
                    <li class="day other-month">
                        <div class="date">2</div>                       
                    </li>
                    <li class="day other-month">
                        <div class="date">3</div>                       
                    </li>
                    <li class="day other-month">
                        <div class="date">4</div>                       
                    </li>
                    <li class="day other-month">
                        <div class="date">5</div>                       
                    </li>
                </ul>

            </div><!-- /. calendar -->
        </div><!-- /. wrap -->
                </ul>
                <br><br>
                <div>
                Developed by : Kapil Bhargava <br>
                </div>
                <br><div class="info">*Icon taken from Google images*</div>



    `,


})

export class JanuaryComponent{
             
        }