import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IndexComponent } from './components/index.component';
import { AppRoutingModule } from './app-routing.module';
import { ServiceComponent } from './components/service.component';
import { AboutComponent } from './components/about.component';
import { NavigationComponent } from './components/navigation.component';
import { NotFoundComponent } from './components/not-found.component';
import { SignInComponent } from './components/sign-in.component';
import { SignUpComponent } from './components/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    ServiceComponent,
    AboutComponent,
    NavigationComponent,
    NotFoundComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
