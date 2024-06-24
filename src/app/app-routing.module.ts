import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LivresComponent } from './livres/livres.component';
import { LivreComponent } from './livres/livre/livre.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'livres/:id', component: LivreComponent },
  { path: 'home', component: HomeComponent },
  { path: 'livres', component: LivresComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
