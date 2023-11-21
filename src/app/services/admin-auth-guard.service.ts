import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminAuthGuardService {
  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) {}

  //   canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot
  // ):
  //   | Observable<boolean | UrlTree>
  //   | Promise<boolean | UrlTree>
  //   | boolean
  //   | UrlTree {
  //   return this.authService.user$.pipe(
  //   map((user) => {
  //     if (user.isAdmin) {
  //       return true;
  //     }
  //     return false;
  //   })
  // );
  // }
}
