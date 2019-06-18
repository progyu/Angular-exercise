import { Component } from '@angular/core';

@Component({
  selector: 'app-stopwatch',
  template: `
  <div class="stop-watch">
    <div class="display">{{ Minutes }}:{{ Second }}:{{ Milsecond }}</div>
    <button class="control"
      (click)="startCount(control)"
      #control
    >Start</button>
  </div>
  `,
  styles: [`
  .stop-watch {
    font-family: 'Source Code Pro', monospace;
    text-align: center;
    font-size: 3em;
    padding: 30px;
  }

  .control {
    width: 300px;
    padding: 5px;
    margin-top: 15px;
    font-size: 36px;
    font-weight: bold;
    border: 2px solid #f44336;
    border-radius: 4px;
    cursor: pointer;
    outline: none;
  }

  .control:hover {
    background: #f44336;
    color: aliceblue;
  }
  `]
})
export class StopwatchComponent {
  milsecond = 0;
  second = 0;
  minutes = 0;
  intervalId;

  start() {
    this.milsecond++;
    if (this.milsecond === 100) {
      this.milsecond = +'00';
      this.milsecond++;
      this.second++;
    }
    if (this.second === 60) {
      this.second = +'00';
      this.minutes++;
    }
  }

  startCount(strBtn: HTMLButtonElement) {
    if (strBtn.textContent === 'Start') {
      this.intervalId = setInterval(this.start.bind(this), 10);
      strBtn.textContent = 'Stop';
    } else {
      clearInterval(this.intervalId);
      strBtn.textContent = 'Start';
    }
  }

  get Milsecond() {
    return this.milsecond < 10 ? `0${this.milsecond}` : this.milsecond;
  }

  get Second() {
    return this.second < 10 ? `0${this.second}` : this.second;
  }

  get Minutes() {
    return this.minutes < 10 ? `0${this.minutes}` : this.minutes;
  }
}
