import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Appuser } from '../models/app-user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  appUser: Appuser;
  constructor(private authserv: AuthService) {
    this.authserv.appUser$.subscribe(appUser => this.appUser = appUser)
  }

  ngOnInit(): void {}
  logout() {
    this.authserv.logout();
  }
  
}
