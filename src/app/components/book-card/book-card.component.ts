import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css'],
})
export class BookCardComponent {
  constructor(private router: Router, private route: ActivatedRoute) {}

  navigateToLivre() {
    this.router.navigate(['/livres', 78]);
  }
}
