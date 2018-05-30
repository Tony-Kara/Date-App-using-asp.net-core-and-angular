import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions , Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

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

    }).catch(this.handleError);
        }

        register(model: any) {
            return this.http.post(this.baseUrl + 'register' , model , this.requestOptions() ).catch(this.handleError);
                }

        private requestOptions() {
        const headers = new Headers({'Content-type': 'application/json'});
        return new RequestOptions({headers: headers});
}

private handleError(error: any) {
    const applicationError = error.headers.get('Application-Error'); // gets error from header
    if (applicationError) {
        return Observable.throw(applicationError);  // returns a message error from the server
    }
    const serverError = error.json(); // these extracts the error from the server
    let modelStateErrors = '';
    if (serverError) {
        for (const key in serverError) {
            if (serverError[key]) {
                modelStateErrors += serverError[key] + '\n';
            }
        }
        return Observable.throw(
            modelStateErrors || 'server error'
        );

    }
}

















}
