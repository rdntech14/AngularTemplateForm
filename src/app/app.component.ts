import { Component } from '@angular/core';
import { extend } from 'webdriver-js-extender';
import { NgForm } from '@angular/forms';
import { stringify } from 'querystring';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  userO = new User();

  onSubmit(myForm) {
    console.log(myForm);
    console.log(myForm.value.username);
  }

  onSubmit1(myForm1:NgForm) {
    console.log(myForm1.value.username1);
    console.log(this.userO.usr);
  }

}

export class User{
    usr:string;
    pwd:string;
}