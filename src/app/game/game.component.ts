import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  constructor() { }
  j_choice : boolean = true;
  resultat : boolean;

  ngOnInit(): void {
  }
  /** Ici c'est la logique du jeu : 
   * - donne une main aléatoirement a l'ordi
   * 
   * lorsque le joueur choisi une main, il va :
   * - récup l'info
   * - comparer avec l'ordi
   * - donner le résultat
   * - envoyer le résultat dans le score
  */
 
  check(){
    //console.log('Reception', nom);
    this.j_choice = false;
  }
}
