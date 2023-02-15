import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { UserResponseModel } from '../model/user.model';
import{NUserResponseModel}from '../model/user.model'
@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
  url='https://dummyjson.com/users';
  nurl='https://dummyjson.com/carts/1'
  constructor(private http:HttpClient) { }
  users(){
  return this.http.get<UserResponseModel>(this.url);
  }
  nusers(){
    return this.http.get<NUserResponseModel>(this.nurl);
  }
}
