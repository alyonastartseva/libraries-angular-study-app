import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { delay, tap } from "rxjs/operators";

@Injectable({
   providedIn: 'root'
})
export class AuthService {

  isUserLoggedIn = false;

  login(userName: string, password: string) {
    console.log(userName, password);

    this.isUserLoggedIn = userName == 'admin' && password == 'admin';
    localStorage.setItem('isUserLoggedIn', this.isUserLoggedIn ? "true" : "false");

    console.log('from auth service', this.isUserLoggedIn)

    return of(this.isUserLoggedIn).pipe(
        delay(1000),
        tap(val => {
          console.log("Is User Authentication is successful: " + val);
        })
    );
  }

  logout(): void {
    this.isUserLoggedIn = false;
    localStorage.removeItem('isUserLoggedIn');
  }
}
