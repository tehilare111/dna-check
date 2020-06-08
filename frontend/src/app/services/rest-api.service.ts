import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  baseUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }

  getFormsList(eventType: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/forms/${eventType}`);
  }

  getUsersList(unit:string): Observable<any> {
    return this.http.get(`${this.baseUrl}/get_group_permissions_List/${unit}`);
  }

  CreateUser(customer: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/create-User/`, customer);
  }
  UpdateUser(customer: Object,personalnumber:string): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update_permissions_user/${personalnumber}`, customer);
  }
  CheckLogin(customer:object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/check_login/`, customer);
  }
  Get_constans_fiald(customer:Object,constants:string):Observable<Object>{
    return this.http.post(`${this.baseUrl}/get_constans_fiald${constants}`,customer)
  }

  deleteAll(): Observable<any> {
    return this.http.delete(`${this.baseUrl}/forms/`);
  }

  getNewEventForm(): Observable<any> {
    return this.http.get(`${this.baseUrl}/event_forms/values`);
  }

  getExistingEventForm(reference: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/event_forms/${reference}`);
  }

  updateExistingEventForm(reference, form): Observable<Object> {
    return this.http.put(`${this.baseUrl}/event_forms/${reference}`, form);
  }

  //createNewEventForm(form: Object): Observable<Object> {
  //  return this.http.post(`${this.baseUrl}/event_forms/`, form);
  //}

  createNewEventFormWithFiles(form: FormData): Observable<Object> {
    return this.http.post(`${this.baseUrl}/event_forms/`, form, {headers: {'enctype': 'multipart/form-data'}});
  }

  deleteExistingEventForm(reference: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/event_forms/${reference}`);
  }

  getTreeUnits(): Observable<any>  {
    return this.http.get(`${this.baseUrl}/units-management/`);
  }

  postTreeUnits(data): Observable<any>{
    return this.http.post(`${this.baseUrl}/units-management/`, data);
  }

  getConstatnsFields(): Observable<any>{
     return this.http.get(`${this.baseUrl}/constants-fields/`);
  }

  postConstatnsFields(data): Observable<any>{
     return this.http.post(`${this.baseUrl}/constants-fields/`, data);
  }
}