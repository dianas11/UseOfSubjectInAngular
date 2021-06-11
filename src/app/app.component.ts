import { InteractionService } from './interaction.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'InteractionUsingService';

  constructor(private _interactionService: InteractionService) {}


  //the methods are going to call the send message method in the interaction service passing in a message
  greetStudent() {
    this._interactionService.sendMessage('Good Morning');
  }

  appreciateStudent() {
    this._interactionService.sendMessage('Well done');
  }
}
