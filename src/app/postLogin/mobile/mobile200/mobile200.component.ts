import { Component, OnInit,ViewChild } from '@angular/core';
import {Router} from '@angular/router';
import { NumberComponent } from '../mobile200/number/number.component';

@Component({
  selector: 'app-mobile200',
  templateUrl: './mobile200.component.html',
  styleUrls: ['./mobile200.component.css']
})
export class Mobile200Component implements OnInit {
  @ViewChild(NumberComponent) 
   private numberComponent : NumberComponent;

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
