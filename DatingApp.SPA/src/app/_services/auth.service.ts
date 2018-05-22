import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions , Response } from '@angular/http';

@Injectable()
export class AuthService {
baseUrl = 'http://localhost:5000/api/auth/';
userToken: any;
constructor(private http: Http) { }
login(model: any) {

// what we have done with these method is send a post request to the server containing the username
// and pwd contanied inside the model property,we state the type of token which is json,we use the
// map function to access the token received from the API and store it in the browswer local storage
    return this.http.post(this.baseUrl + 'login', model, this.requestOptions()).map((response: Response) => {
        const user = response.json();
         if (user) {// these checks if the user has the token object
            localStorage.setItem('token', user.tokenString); // these stores my token in the local browser
            this.userToken = user.tokenString;
        }

    });
        }

        register(model: any) {
            return this.http.post(this.baseUrl + 'register' , model , this.requestOptions() );
                }

             private requestOptions() {
                const headers = new Headers({'Content-type': 'application/json'});
                return new RequestOptions({headers: headers});






}

}
