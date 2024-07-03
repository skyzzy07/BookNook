import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LivresComponent } from './livres/livres.component';
import { LivreComponent } from './livres/livre/livre.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './dashboard/users/users.component';
import { CategoriesComponent } from './dashboard/categories/categories.component';
import { LivresListComponent } from './dashboard/livres-list/livres-list.component';

const routes: Routes = [
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
          { path: '', redirectTo: '/dashboard/users', pathMatch: 'full' },
          { path: 'users', component: UsersComponent },
          { path: 'categories', component: CategoriesComponent },
          { path: 'livres', component: LivresListComponent },
        ],
      },
      { path: 'livres/:id', component: LivreComponent },
      { path: 'home', component: HomeComponent },
      { path: 'livres', component: LivresComponent },
    ],
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: 'sign-up', component: SignUpComponent },
      { path: 'sign-in', component: SignInComponent },
    ],
  },
  { path: 'profile', component: ProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
