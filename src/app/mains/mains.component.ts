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

  select_main(name){
    if(name == 'pi'){

    }
    if(name == 'pa'){

    }
    if(name == 'ci'){

    }
  }

}
