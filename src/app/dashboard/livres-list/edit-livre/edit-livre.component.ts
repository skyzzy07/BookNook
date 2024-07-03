import { Component, Input } from '@angular/core';
import { Livre } from 'src/mock-data';

@Component({
  selector: 'app-edit-livre',
  templateUrl: './edit-livre.component.html',
  styleUrls: ['./edit-livre.component.css'],
})
export class EditLivreComponent {
  @Input() livre = {
    title: 'Add book',
    id: '',
    prix: '',
    name: '',
    auteur: '',
    category: '',
    description: '',
  };
}
