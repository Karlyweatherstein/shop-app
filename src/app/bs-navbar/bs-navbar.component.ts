import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css'],
})
export class BsNavbarComponent implements OnInit {
  appUser$ = this.authService.user$;

  constructor(public authService: AuthService) {}

  ngOnInit(): void {}

  userLogout() {
    this.authService.logout();
  }
}
