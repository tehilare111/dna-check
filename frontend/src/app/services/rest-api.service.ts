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

  Get_constans_fiald(faild:string[]):Observable<any> {
    return this.http.get(`${this.baseUrl}/get_constats_fields/${faild}`,);
  }

  getUsersList(unit:string): Observable<any> {
    return this.http.get(`${this.baseUrl}/get_group_permissions_List/${unit}/`);
  }

  CreateUser(customer: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/create-User/`, customer);
  }
  UpdateUser(customer: Object,personalnumber:string): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update_permissions_user/${personalnumber}`, {"permissions":customer});
  }
  CheckLogin(customer:object): Observable<Object> {

    return this.http.post(`${this.baseUrl}/check_login/`, customer);
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
  getTreeUnits_register(): Observable<any>  {
    return this.http.get(`${this.baseUrl}/get_array_units/`);
  }

  postTreeUnits(data): Observable<any>{
    return this.http.post(`${this.baseUrl}/units-management/`, data);
  }

  getConstatnsFields(): Observable<any>{
     return this.http.get(`${this.baseUrl}/constants-fields/`);
  }
  getConstansFialdsNotPermissions(faild:string[]):Observable<any> {
    return this.http.get(`${this.baseUrl}/get_constats_fields/${faild}`,);
  }


  postConstatnsFields(data): Observable<any>{
     return this.http.post(`${this.baseUrl}/constants-fields/`, data);
  }

  getXlFile(eventType: string){
    return this.http.get(`${this.baseUrl}/forms/xl/${eventType}`, { responseType: 'blob' });
  }
}