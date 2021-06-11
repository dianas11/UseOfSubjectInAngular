import { InteractionService } from './../interaction.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor(private _interactionService: InteractionService) { }

  ngOnInit(): void {

    //subscribe to the observable in the student component
    this._interactionService.teacherMessage$
      .subscribe(
        message => {
          if (message ==='Good Morning'){
            alert('Good Morning Teacher');
          }else if(message === 'Well done'){
            alert('Thank You teacher');
          }
        }
      )
  }

}
