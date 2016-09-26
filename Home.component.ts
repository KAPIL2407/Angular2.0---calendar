import {Component} from 'angular2/core';
@Component({
    selector: 'home',
    template: `
        <br>
                <div>
                        <img style="position: relative; top:8px;" width="40px"
height="40px" alt="Calendar icon" src="../icon.jpg"> Welcome To the
Calendar App <img style="position: relative; top:8px;" width="40px"
height="40px" alt="Calendar icon" src="../icon.jpg">
                        <br>
                </div>

                <ul>
                        <li>HOW TO OPERATE !</li>
                        <br>
                        <li>Select the month to view calendar</li>
                        <br>
                        <li>Add an event?</li>
                        <li>Select the date to add event</li>
                        <li>Fill the details of event</li>
                        <li>Verify the details by adding 'Verified' tag</li>
                        <br>
                        <li>Edit an event?</li>
                        <li>Set the 'Not Verified' tag</li>
                        <br>
                        <li>Delete an event?</li>
                        <li>Set the 'Not Verified' tag</li>
                        <li>Remove the details</li>

                </ul>
                <br><br>
                <div>
                Designed and Developed by Ayush Gupta<br>
                </div>
                <br><div class="info">*App icon taken from google images*</div>



    `,


})

export class HomeComponent{

        }