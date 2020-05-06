import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  constructor() { }

  score_v = 0;
  score_d = 0;
  alignement = 'center';

  ngOnInit(): void {
  }

  /**
   * Ici on va afficher le score
   * pour cela il va falloir incrémenter la variable X ou Y
   * bonus, donner un fond vert en cas de score sup à l'ordi
   */
}
