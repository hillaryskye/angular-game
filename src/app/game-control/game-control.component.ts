import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ENETDOWN } from 'constants';
import { FunctionCall } from '@angular/compiler';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  // @Output() timerDestroy = new EventEmitter<{counter: number, type: string}>();

  constructor() {
   }

   counter = 0;
   interval: any;
   type: string;

  ngOnInit() {
  }

  onStart(event: {counter: number}) {
    this.interval = setInterval(() => {
      this.intervalFired.emit(
        this.counter++);
      event.counter = this.counter;
    }, 1000);
      // if (this.counter % 2 === 0) {
      //   this.type = 'even';
      // } else {this.type = 'odd'; }
  }

  onDestroy(event: {counter: number}) {
    if (this.interval) {
      clearInterval(this.interval);
      event.counter = this.counter;
    }
  }
}
