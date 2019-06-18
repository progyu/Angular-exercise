import { Component } from '@angular/core';

@Component({
  selector: 'app-analogclock',
  template: `
    <div class="clock">
        <div class="analog-clock">
          <div class="hour hand" [style.transform]="analogHours"></div>
          <div class="minute hand" [style.transform]="analogMinutes"></div>
          <div class="second hand" [style.transform]="analogSeconds"></div>
          <div class="center-circle"></div>
        </div>
      <div class="digital-clock">{{ Hour }}:{{ Minute }}:{{ Second }}</div>
    </div>
  `,
  styles: [`
  .analog-clock {
    position: relative;
    margin: 100px auto 0;
    width: 200px;
    height: 200px;
    background-color: aliceblue;
    border-radius: 50%;
  }

  .hand {
    position: absolute;
    left: 50%;
    width: 1px;
    height: 100px;
    /* 자바스크립트에 의해 덮어써진다. */
    /* transform: translate3d(-50%, 0, 0); */
    transform-origin: 100% 100%;
  }

  .hour {
    background-color: #f44336;
  }

  .minute {
    background-color: #3f51b5;
  }

  .second {
    background-color: #9e9e9e;
  }

  .center-circle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    width: 12px;
    height: 12px;
    background-color: black;
    border-radius: 50%;
  }

  .digital-clock {
    position: absolute;
    top: 350px;
    left: 50%;
    transform: translate3d(-50%, 0, 0);
    font-size: 2em;
    font-family: 'Source Code Pro', monospace;
  }
  `]
})
export class AnalogclockComponent {

  constructor() {
    this.init();
  }

  date: Date;
  seconds: number;
  minutes: number;
  hours: number;
  analogSeconds: string;
  analogMinutes: string;
  analogHours: string;

  getTime() {
    this.date = new Date();
    this.seconds = this.date.getSeconds();
    this.minutes = this.date.getMinutes();
    this.hours = this.date.getHours() > 12 ? this.date.getHours() - 12 : this.date.getHours();

    this.analogSeconds = `rotate(${this.seconds * 6}deg)`;
    this.analogMinutes = `rotate(${this.minutes * 6 + this.seconds / 10}deg)`;
    this.analogHours = `rotate(${this.hours * 30 + this.seconds / 60}deg)`;
  }

  get Second() {
    return this.seconds < 10 ? `0${this.seconds}` : this.seconds;
  }

  get Minute() {
    return this.minutes < 10 ? `0${this.minutes}` : this.minutes;
  }

  get Hour() {
    return this.hours < 10 ? `0${this.hours}` : this.hours;
  }

  init() {
    setInterval(this.getTime.bind(this), 1000);
  }

}
