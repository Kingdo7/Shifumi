import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mains',
  templateUrl: './mains.component.html',
  styleUrls: ['./mains.component.css']
})
export class MainsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  show = 'true';
  name : string;
 /** Ici on détermine la couleur le la main 
  * jaune de base
  * vert en cas de victoire
  * rouge en cas de défaite 
  */
  select_main(name){
    if(name == 'pi'){

    }
    if(name == 'pa'){

    }
    if(name == 'ci'){

    }
  }

}
