import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule,FormControl,Validators, FormBuilder, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formdata : FormGroup;

  

  constructor(private router:Router, private fb :FormBuilder) { 
   
  }

  ngOnInit() {
    this.formdata = this.fb.group({
      'uname' : [null,Validators.required],
      'passwd' : [null,Validators.required],
      'validate':''
    });  
  }
  onSubmit(data) {

  if (data.uname == 'test' && data.passwd == 'test123')  {
    this.router.navigate(['/sidermenu'])
    
  }
   else{
     alert("invalid details");
   }


  }
}
