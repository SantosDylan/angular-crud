import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { User } from '../../interface/user.interface';

@Injectable({ providedIn: 'root' })
export class Auth implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!localStorage['loggedInUser']) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
