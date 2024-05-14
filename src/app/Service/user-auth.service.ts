import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthConfigService } from './auth-config.service';
import { User } from '../Model/User';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor(private http:HttpClient) { }
  url="http://localhost:4000/auth/";
  login(u:User){
    return this.http.post<any>(this.url+'login',u);
  }
}
