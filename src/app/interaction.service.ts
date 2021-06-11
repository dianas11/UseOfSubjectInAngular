import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  private _teacherMessageSource = new Subject<string>();

  //expose the subject as an observable
  teacherMessage$ = this._teacherMessageSource.asObservable();

  constructor() { }
  
  //create a method that accepts a message from the teacher component and pushes that message using observable
  sendMessage(message:string) {
    //push the message onto the teacher message source
    this._teacherMessageSource.next(message);
  }
}
