import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mains',
  templateUrl: './mains.component.html',
  styleUrls: ['./mains.component.css']
})
export class MainsComponent implements OnInit {

  constructor() { }
  @Output()sendMainToGame = new EventEmitter();

  ngOnInit(): void {
  }
  show = 'true';
  selectJoueur : string;
 /** Ici on détermine la couleur le la main 
  * jaune de base
  * vert en cas de victoire
  * rouge en cas de défaite 
  */
  select_main(){
    console.log('select joueur', this.selectJoueur);
    this.sendMainToGame.emit(this.selectJoueur);
  }
}
