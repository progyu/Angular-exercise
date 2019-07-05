import { AbstractControl } from '@angular/forms';

// 패스워드 일치 유효성 검증
export class PasswordValidator {
  static match(passwordGroup: AbstractControl) {
    // AbstractControl form control 요소들의 최상위, 덕타이핑에 의해서 타입이 맞아진다.
    const password = passwordGroup.get('password').value;
    const confirmPassword = passwordGroup.get('confirmPassword').value;
    if( password !== confirmPassword ) {
      return { match: {password, confirmPassword}};
    } else {
      return null;
    }
  }
}
