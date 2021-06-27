import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { map, switchMap } from 'rxjs/operators';
import { UserService } from './user.service';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/switchMap'

@Injectable({
  providedIn: 'root',
})
export class AdminAuthGuardService implements CanActivate {
  constructor(private auth: AuthService, private userservice: UserService) {}
  canActivate(): Observable<boolean> {
    return this.auth.appUser$
      .pipe(map((appUser) => appUser.isAdmin));
  }
}
