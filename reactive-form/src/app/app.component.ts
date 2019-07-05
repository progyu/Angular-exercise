import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { PasswordValidator } from './password-validator';

@Component({
  selector: 'app-root',
  template: `
    <form [formGroup]="userForm"> <!-- ngForm과 유사한 역할. ngOnit안에서 한 처리와 맵핑-->
      <input type="text" placeholder="userid" 
        formControlName="userid">
      <em *ngIf="userid.errors?.required && userid.touched">아이디를 입력해주세요</em>
      <em *ngIf="userid.errors?.pattern && userid.touched">영문 대소문자 4 ~ 10 자리의 아이디를 입력하세요</em>
      <div formGroupName="passwordGroup">
        <input type="password" placeholder="password" 
          formControlName="password">
        <input type="password" placeholder="confirm password"
        formControlName="confirmPassword">
      </div>
      <button>회원가입</button>
    </form>

    <pre> userForm.value : {{ userForm.value | json }}</pre>
    <pre> userForm.valid : {{ userForm.valid | json }}</pre>

    <pre> userid.valid : {{ userid.valid | json }}</pre>
    <pre> userid.errors : {{ userid.errors | json }}</pre>


    <pre> passwordGroup.password.valid : {{ password.valid | json }}</pre>
    <pre> passwordGroup.password.errors : {{ password.errors | json }}</pre>
    <pre> passwordGroup.confirmPassword.valid : {{ confirmPassword.valid | json }}</pre>
    <pre> passwordGroup.confirmPassword.errors : {{ confirmPassword.errors | json }}</pre>

    <pre> passwordGroup.errors : {{ passwordGroup.errors | json }}</pre>
  `,
  styles: []
})
export class AppComponent implements OnInit {
  userForm: FormGroup;

  constructor( private fb: FormBuilder) {}

  ngOnInit() {
    // 리액티브 폼에 대한 설정, 인스턴스 생성
    // this.userForm = new FormGroup({
    //   userid: new FormControl('', [
    //     Validators.required,
    //     Validators.pattern('[a-zA-Z]{4,10}')
    //   ]), // () 안에 초기값을 줄 수 있다.
    //   passwordGroup: new FormGroup({
    //     password: new FormControl('', [
    //       Validators.required,
    //       Validators.pattern('[a-zA-Z]{4,10}')
    //     ]),
    //     confirmPassword: new FormControl('', [
    //       Validators.required,
    //       Validators.pattern('[a-zA-Z]{4,10}')
    //     ])
    //   }, PasswordValidator.match)
    // });
    // console.dir(this.userForm);
    this.userForm = this.fb.group({
      userid: ['',[
        Validators.required,
        Validators.pattern('[a-zA-Z]{4,10}')
      ]],
      passwordGroup: this.fb.group({
        password: ['', Validators.required,],
        confirmPassword: ['', Validators.required,]
      }, { validator: PasswordValidator.match})
    });
  }

  get userid() {
    return this.userForm.get('userid');
  }

  get passwordGroup() {
    return this.userForm.get('passwordGroup');
  }

  get password() {
    return this.userForm.get('passwordGroup.password');
  }
  
  get confirmPassword() {
    return this.userForm.get('passwordGroup.confirmPassword');
  }

}
