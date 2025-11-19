import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  onLogin(email:string, password:string){
    if(email !== "admin@example.com" || password !== "1234"){
      throw new Error("Invalid email or password, please try again"); 
    }
    localStorage.setItem('token','admin@example.com');
  }
  logOut(){
    localStorage.removeItem('token');
  }
  isAuthenticated(){
    const token = localStorage.getItem('token');

    if(!token){
      return false
    }
    return token === 'admin@example.com';
  }
  
}
