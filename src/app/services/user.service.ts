import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  //add user

  public addUser(user: any) {
    return this.http.post(`${baseUrl}/user/`, user);
  }

  public viewPlayer(){
return this.http.get(`${baseUrl}/user/player`)
  }

  public viewTrainer(){
    return this.http.get(`${baseUrl}/user/trainer`)
      }

  public deleteUser(id){
    return this.http.delete(`${baseUrl}/user/${id}`)
  }

}
