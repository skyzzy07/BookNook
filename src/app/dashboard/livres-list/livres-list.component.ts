import { Component, OnInit, ViewChild } from '@angular/core';
import { EditLivreComponent } from './edit-livre/edit-livre.component';
import { LivreService } from 'src/app/services/livre.service';

@Component({
  selector: 'app-livres-list',
  templateUrl: './livres-list.component.html',
  styleUrls: ['./livres-list.component.css'],
})
export class LivresListComponent implements OnInit {
  public livres: any[] = [];
  @ViewChild(EditLivreComponent) editLivreModal;

  constructor(private livreService: LivreService) {}
  ngOnInit() {
    this.livreService.getLivres().subscribe((livres) => {
      console.log(livres[0]);
      this.livres = livres;
    });
  }

  openEditBookModal(livre) {
    this.editLivreModal.livre = {
      title: 'Edit Book',
      id: livre.id,
      prix: livre.prix,
      name: livre.name,
      auteur: livre.auteur,
      category: livre.category,
      description: livre.description,
      image: livre.image,
    };
  }
}
