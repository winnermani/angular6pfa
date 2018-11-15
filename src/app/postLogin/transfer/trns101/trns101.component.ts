import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trns101',
  templateUrl: './trns101.component.html',
  styleUrls: ['./trns101.component.css']
})
export class Trns101Component implements OnInit {
  currentStory:string = '1980 Love Story';
  mainCharacter:string = 'vilan';

  constructor() { }

  ngOnInit() {
  }

}
