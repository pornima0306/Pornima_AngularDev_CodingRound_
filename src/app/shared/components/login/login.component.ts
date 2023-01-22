import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../guards/authservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  signUpForm! : FormGroup;
  userRole : string="";
  constructor(private fb : FormBuilder,
    private router : Router,
    private authService : AuthService) { }

  ngOnInit(): void {
    this.onCreateForm()
  }
  onCreateForm(){
    this.signUpForm = this.fb.group({
      username : ['',[ Validators.required]],
      password :['',[Validators.required,Validators.minLength(8)]]
    })
  }
  onLogin(){
    console.log(this.signUpForm.value)
    this.userRole = this.signUpForm.value.username;
    this.authService.LogIn()
   
    if(this.userRole === "Admin"){
      localStorage.setItem("userRole",this.userRole);
      console.log(this.userRole)
      this.router.navigate(['/admincard'])
    }else if(this.userRole === "User"){
      localStorage.setItem("userRole",this.userRole);
      console.log(this.userRole)
      this.router.navigate(['/'])
    }else{
      console.log(this.userRole)
      this.router.navigate(['/login'])
    }

  }
  get f(){
    return this.signUpForm.controls
  }
  get usernameControl(){
    return this.signUpForm.get('username') as FormControl
  }
  get passwordControl(){
    return this.signUpForm.get('password') as FormControl
  }
}
