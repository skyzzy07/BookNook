import { Component, OnInit, ViewChild } from '@angular/core';
import { Livre, livres } from 'src/mock-data';
import { EditLivreComponent } from './edit-livre/edit-livre.component';
import { LivreService } from 'src/app/services/livre.service';

@Component({
  selector: 'app-livres-list',
  templateUrl: './livres-list.component.html',
  styleUrls: ['./livres-list.component.css'],
})
export class LivresListComponent implements OnInit {
  livres: Livre[] = livres;
  @ViewChild(EditLivreComponent) editLivreModal;

  constructor(private livreService: LivreService) {}
  ngOnInit() {
    this.livreService.getLivres().subscribe((livres) => (this.livres = livres));
  }

  openEditBookModal(livre) {
    console.log('event emitted');
    this.editLivreModal.livre = {
      title: 'Edit Book',
      code: livre.code,
      prix: livre.prix,
      name: livre.title,
      auteur: livre.auteur,
      category: livre.category,
      description: livre.description,
      image: livre.image,
    };
  }
}
