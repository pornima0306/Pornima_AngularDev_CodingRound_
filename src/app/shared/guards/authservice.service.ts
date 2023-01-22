import { createInjectableType } from "@angular/compiler";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
 providedIn : 'root'
})

export class AuthService{
    public loginStatus : boolean = false;
constructor(){}

isAuthenticated(): Observable<boolean>{
    return new Observable((observer)=>{
        this.loginStatus = localStorage.getItem('token') ? true : false;
        observer.next(this.loginStatus)
    })
}
LogIn(){
    this.loginStatus = true;
    let token = "token";
    localStorage.setItem("token",token)
    /* let userRole = "Admin"
    localStorage.setItem("userRole",userRole) */
}
LogOut(){
    this.loginStatus = false;

}
}