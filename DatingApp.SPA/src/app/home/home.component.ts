import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  registerMode = false;
  values: any;
  constructor(private http: Http) { }

  ngOnInit() {

  }
  // inside the homecomponent.html,the form RegisterMode property is set to false and the form would not show but when the register button
  // is clicked,it would set the registerMode property to true and the form would display
  registerToggle() {
    this.registerMode =  true;   // these was initially used !this.registerMode;
  }



    cancelRegisterMode(registerMode: boolean) {
      this.registerMode  = registerMode;
    }
}
