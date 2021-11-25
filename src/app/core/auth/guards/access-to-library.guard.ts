import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccessToLibraries implements CanActivate {

  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {
      let url: string = state.url;
      return this.checkLogin(url);
    }

  checkLogin(url: string): true | UrlTree {
    console.log("Url: " + url)

    let isUserLoggedIn = localStorage.getItem('isUserLoggedIn');
    console.log(isUserLoggedIn)

    if(isUserLoggedIn != null && isUserLoggedIn == "true") {
      if (url == "login") {
        return this.router.parseUrl('libraries');
      }
      else {
        return true;
      }
    }
    else {
      return this.router.parseUrl('login');
    }
 }
}
