import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  alignement = 'center';
  start : boolean;
  restart : boolean = true;
  main_ordi : boolean;
  /**
   * Gestion de base du programme
   * Gère l'affichage de la partie
   */

  /* Lorsqu'on appuie sur le bouton, le bouton disparait et le tableau de jeu apparait*/
  start_game(){ // ne fonctionne pas 
    this.start = true;
    this.restart = false;
    console.log('start', this.start);
    console.log('restart', this.restart);
  }
}
