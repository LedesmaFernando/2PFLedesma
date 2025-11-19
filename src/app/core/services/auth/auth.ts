import { Injectable } from '@angular/core';
import { API_URL } from '../utils/constants';
import { HttpClient } from '@angular/common/http';
import { User } from './model/user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usersUrl = `${API_URL}/users`;
  user: User | null = null;

  constructor(private http:HttpClient, private router:Router){}

  onLogin(email:string, password:string){
    this.http.get<User[]>(this.usersUrl).subscribe((users) =>{
      const user = users.find((user) => user.email === email);

      if(!user){
        throw new Error('invalid email');        
      }
      if(user.password != password){
        throw new Error('invalid password');
      }
      localStorage.setItem('token', user.email);
      this.user = user;
      this.router.navigate(['dashboard']);
    } )


    if(email !== "admin@example.com" || password !== "1234"){
      throw new Error("Invalid email or password, please try again"); 
    }
    localStorage.setItem('token','admin@example.com');
  }
  logOut(){
    localStorage.removeItem('token');
    this.user = null;
    this.router.navigate(['login']);
  }
  isAuthenticated(){
    const token = localStorage.getItem('token');

    if(!token){
      return false
    }
    return token === this.user?.email;
  }
  
}
