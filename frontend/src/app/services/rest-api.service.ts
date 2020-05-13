import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  private baseUrl = 'http://127.0.0.1:8000/api/';

  constructor(private http: HttpClient) { }

  getCustomer(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}customers/${id}`);
  }

  getCustomers_username(reference:string): Observable<Object> {
    return this.http.get(`${this.baseUrl}get_users_username/${reference}`);
  }
  getCustomers_personal(reference:string): Observable<Object> {
    return this.http.get(`${this.baseUrl}get_users_personalnumber/${reference}`);
  }
  createCustomer(customer: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}customers/`, customer);
  }
  createCustomerUser(customer: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}create-User/`, customer);
  }

  updateCustomer(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}customers/${id}`, value);
  }

  deleteCustomer(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}customers/${id}`);
  }

  getCustomersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}customers/`);
  }

  getCustomersByAge(age: number): Observable<any> {
    return this.http.get(`${this.baseUrl}customers/age/${age}/`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(`${this.baseUrl}customers/`);
  }

  getNewEventForm(): Observable<any> {
    return this.http.get(`${this.baseUrl}event_forms/`);
  }
}
