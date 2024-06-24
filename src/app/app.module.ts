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
import { CategoriesComponent } from './categories/categories.component';
import { RouterModule } from '@angular/router';

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
    CategoriesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
