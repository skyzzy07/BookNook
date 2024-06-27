import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SliderComponent } from './home/slider/slider.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { CartComponent } from './components/cart/cart.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FeaturesComponent } from './home/features/features.component';
import { LatestAdditionsComponent } from './home/latest-additions/latest-additions.component';
import { BookCardComponent } from './components/book-card/book-card.component';
import { RouterModule } from '@angular/router';
import { LivresComponent } from './livres/livres.component';
import { LivreComponent } from './livres/livre/livre.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { CategoriesComponent } from './dashboard/categories/categories.component';
import { UsersComponent } from './dashboard/users/users.component';
import { SidenavComponent } from './dashboard/sidenav/sidenav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    SliderComponent,
    AvatarComponent,
    CartComponent,
    FeaturesComponent,
    LatestAdditionsComponent,
    BookCardComponent,
    LivresComponent,
    LivreComponent,
    SignUpComponent,
    SignInComponent,
    ProfileComponent,
    DashboardComponent,
    AuthLayoutComponent,
    MainLayoutComponent,
    CategoriesComponent,
    UsersComponent,
    SidenavComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
