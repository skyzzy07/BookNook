import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { BookCardComponent } from './components/book-card/book-card.component';
import { CartComponent } from './components/cart/cart.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CategoriesComponent } from './dashboard/categories/categories.component';
import { EditCategoryComponent } from './dashboard/categories/edit-category/edit-category.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditLivreComponent } from './dashboard/livres-list/edit-livre/edit-livre.component';
import { LivresListComponent } from './dashboard/livres-list/livres-list.component';
import { SidenavComponent } from './dashboard/sidenav/sidenav.component';
import { UsersComponent } from './dashboard/users/users.component';
import { FeaturesComponent } from './home/features/features.component';
import { HomeComponent } from './home/home.component';
import { LatestAdditionsComponent } from './home/latest-additions/latest-additions.component';
import { SliderComponent } from './home/slider/slider.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { LivreComponent } from './livres/livre/livre.component';
import { LivresComponent } from './livres/livres.component';
import { ProfileComponent } from './profile/profile.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

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
    LivresListComponent,
    EditCategoryComponent,
    EditLivreComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
