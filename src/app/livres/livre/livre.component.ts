import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-livre',
  templateUrl: './livre.component.html',
  styleUrls: ['./livre.component.css'],
})
export class LivreComponent implements OnInit {
  isLoggedIn: boolean = false;
  constructor(private authService: AuthService) {}
  ngOnInit(): void {
    this.authService.isLoggedIn.subscribe(
      (loggedIn) => (this.isLoggedIn = loggedIn)
    );
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}
