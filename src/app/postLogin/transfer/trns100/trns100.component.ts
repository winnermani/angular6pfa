import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Router} from '@angular/router';
import {Input} from '@angular/core';
import { Trns101Component } from '../trns101/trns101.component';
import { FormsModule, ReactiveFormsModule,FormControl,Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-trns100',
  templateUrl: './trns100.component.html',
  styleUrls: ['./trns100.component.css']
})
export class Trns100Component implements OnInit {
  testdata :FormGroup;
  @Input() story : string;
  @Input('character') myCharacter : string;
  
  constructor(private fb: FormBuilder , private router:Router) { }

  number(){
    this.router.navigate(['/trns101']);
  }

  ngOnInit() {
    this.testdata = this.fb.group({
      'username':[null,Validators.required],
      'number':[null,Validators.required],
      'trnsname':[null,Validators.required],
      'validate' : ''
    })
  }

}
