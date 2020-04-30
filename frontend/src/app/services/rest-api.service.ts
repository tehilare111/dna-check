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

  createCustomer(customer: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}customers/`, customer);
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

  getExistingEventForm(reference: string): Observable<any> {
    return this.http.get(`${this.baseUrl}event_forms/${reference}`);
  }

  updateExistingEventForm(reference, form): Observable<Object> {
    return this.http.put(`${this.baseUrl}event_forms/${reference}`, form);
  }

  createNewEventForm(form: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}event_forms/`, form);
  }

  createNewEventFormWithFiles(form: FormData): Observable<Object> {
    return this.http.post(`${this.baseUrl}event_forms/file`, form, {headers: {'enctype': 'multipart/form-data'}});
  }

  deleteExistingEventForm(reference: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}event_forms/${reference}`);
  }
}