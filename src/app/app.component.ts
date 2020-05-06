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

  start_game(){
    this.start = true;
    this.restart = false;
    console.log('start', this.start);
    console.log('restart', this.restart);
  }
}
