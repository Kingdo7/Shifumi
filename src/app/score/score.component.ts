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

}
