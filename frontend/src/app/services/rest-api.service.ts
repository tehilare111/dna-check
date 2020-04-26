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

  createNewEventForm(form: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}event_forms/`, form);
  }

  createNewEventFormWithFiles(form: FormData): Observable<Object> {
    return this.http.post(`${this.baseUrl}event_forms/file`, form, {headers: {'enctype': 'multipart/form-data'}});
  }

  postFile(fileToUpload: File): Observable<Object> {
    const formData: FormData = new FormData();
    formData.append('investigationFile', fileToUpload, fileToUpload.name);
    formData.append('try', "{'equipment', 'bye'}");
    return this.http.post(`${this.baseUrl}event_forms/file`, formData);
      //catch((e) => {this.handleError(e); console.log("failed!");});
  }
}