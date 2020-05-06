import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-mains',
  templateUrl: './mains.component.html',
  styleUrls: ['./mains.component.css']
})
export class MainsComponent implements OnInit {

  constructor() { }
  @Output() sendMainsToGame = new EventEmitter();
  @Input() nom : string;

  ngOnInit(): void {
  }

  /** Ici on récupère le bouton sélectionner par le joueur et on l'envoie à game **/
  select_main(nom){
    if (this.nom == "assets/pierre_base.png") {
      this.nom = 'Pierre';
    } else 
    if (this.nom == "assets/papier_base.png") {
      this.nom = 'Papier';
    } else {
      this.nom = 'Ciseaux';
    }
    console.log('Envoie :', this.nom);
    this.sendMainsToGame.emit(this.nom);
  }

  /** Ici on détermine la couleur le la main 
  * jaune de base
  * vert en cas de victoire
  * rouge en cas de défaite 
  */
}
