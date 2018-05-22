import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
model: any = {};
// an input decorator was used here to pass values from the parent component(home) to the child
// comp0nent(register),it has been removed.

@Output() cancelRegister = new EventEmitter();  // The output decorator
  constructor(private auth: AuthService) { }

  ngOnInit() {
  }
register() {
  this.auth.register(this.model).subscribe(() => {
  console.log('Registration is successful');
  }, error => {
    console.log(error);
  });
}

cancel() {
  this.cancelRegister.emit(false);
  console.log('cancelled');
}
}
