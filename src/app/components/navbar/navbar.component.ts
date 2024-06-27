import { Component, OnInit, HostListener } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { SignUpComponent } from '../../sign-up/sign-up.component';
import { SignInComponent } from '../../sign-in/sign-in.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isLoggedIn: boolean = false;
  isCollapsed: boolean = window.innerWidth < 992;
  dialog: any;
  constructor(private authService: AuthService) {}
  openSignUpDialog(): void {
    this.dialog.open(SignUpComponent, {
      width: '400px',
    });
  }

  ngOnInit() {
    this.authService.isLoggedIn.subscribe(
      (loggedIn) => (this.isLoggedIn = loggedIn)
    );
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any): void {
    this.checkScreenWidth();
  }

  checkScreenWidth() {
    this.isCollapsed = window.innerWidth < 992;
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }
}
