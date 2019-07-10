import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  template: `
    <form (ngSubmit)="onNgSubmit(userForm)" #userForm="ngForm">
      <input type="text" name="userId" ngModel required>
      <input type="password" name="password" ngModel required>
      <button type="submit" [disabled]="userForm.invalid">로그인</button>
    </form>
  `,
  styles: []
})
export class SignInComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onNgSubmit(userForm: NgForm) {
    console.log(userForm);
  }
}
