import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  template: `
    <nav>
      <a routerLink="/"
        [routerLinkActiveOptions]="{exact: true}"
        routerLinkActive="active"
        >Logo</a>
      <a routerLink="/service"
        [routerLinkActiveOptions]="{exact: true}"
        routerLinkActive="active"
      >Service</a>
      <a routerLink="/about"
        [routerLinkActiveOptions]="{exact: true}"
        routerLinkActive="active"
      >About</a>
      <a routerLink="/signin"
        [routerLinkActiveOptions]="{exact: true}"
        routerLinkActive="active"
      >SingIn</a>
      <a routerLink="/signup"
        [routerLinkActiveOptions]="{exact: true}"
        routerLinkActive="active"
      >SignUp</a>
    </nav>
  `,
  styles: [`
    nav > a {
      margin-right: 10px;
      text-decoration: none;
    }

    .active {
      color: blue;
      font-weight: 900;
    }
    `]
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
