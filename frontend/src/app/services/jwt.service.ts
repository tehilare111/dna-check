import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Users } from '../pages/management/users';
import { ThreeColumnsLayoutComponent } from '../@theme/layouts';
import { Observable } from 'rxjs';
import { ReturnStatement } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class JwtService {
  array_user={}
  users:Users=new Users()
  baseUrl = 'http://127.0.0.1:8000/api'
  constructor(private httpClient: HttpClient) { }

  //////////////////////////////////////////////////////////////////////////////

  login(username:string, password:string) {
    this.array_user={"username":username,"password":password}
    return this.httpClient.post<{access_token:  string}>(`${this.baseUrl}/check_login/`,this.array_user).pipe(tap(res => {
    this.users.token=res.access_token
    this.users.username=username
    localStorage.setItem('access_token', res.access_token);
    console.log(localStorage.getItem('access_token'))
}))

}
    
//////////////////////////////////////////////////////////////////////////////

register(username:string, firstname:string,lastname:string, password:string,personalnumber:string, position_army:string,rank:string,units:string) {
  return this.httpClient.post<{access_token: string}>('http://127.0.0.1:4200/pages/register', {username, personalnumber}).pipe(tap(res => {
  this.login(username, password)
}))
}

///////////////////////////////////////////////////////////////////////////////

logout() {
  localStorage.removeItem('access_token');
}

///////////////////////////////////////////////////////////////////////////////

check_token_undefined(token){

  if (token===undefined){
    return "undefined"
  }
  else
    return token
}

///////////////////////////////////////////////////////////////////////////////

public get loggedIn():Boolean{
  return localStorage.getItem('access_token') !==  null;
}

///////////////////////////////////////////////////////////////////////////////

getTreeUnits(): Observable<any>  {
  return this.httpClient.get<{access_token:string}>(`${this.baseUrl}/units-management/`);
}

//////////////////////////////////////////////////////////////////////////////

postTreeUnits(data){
  return this.httpClient.post<{access_token:string}>(`${this.baseUrl}/units-management/`,{"data":data}).pipe(tap(res => {
    console.log(res.access_token)
}))
}
///////////////////////////////////////////////////////////////////////////////
UpdateUser(customer: Object,personalnumber:string){
  return this.httpClient.put<{access_token:string}>(`${this.baseUrl}/update_permissions_user/${personalnumber}`,{"customer":customer}).pipe(tap(res => {
    console.log(res.access_token)
}))
}
////////////////////////////////////////////////////////////////////////////////

getUsersList(unit:string): Observable<any> {
  return this.httpClient.get(`${this.baseUrl}/get_group_permissions_List/${unit}/${this.check_token_undefined(this.users.token)}`);
}

///////////////////////////////////////////////////////////////////////////////

getConstatnsFields(): Observable<any>{
  return this.httpClient.get<{access_token:string}>(`${this.baseUrl}/constants-fields/`).pipe(tap(res => {
    console.log(res.access_token)
})) 
}

///////////////////////////////////////////////////////////////////////////////

postConstatnsFields(data): Observable<any>{
  return this.httpClient.post<{access_token:string}>(`${this.baseUrl}/constants-fields/`, data);
}

//////////////////////////////////////////////////////////////////////////////

getFormsList(eventType: string): Observable<any> {
  return this.httpClient.get(`${this.baseUrl}/forms/${eventType}`);
}

}
