
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Users } from '../pages/management/users';
import { catchError } from 'rxjs/operators';
import 'rxjs/add/operator/do';
import { Router } from '@angular/router';
import { ToastService } from '../services/toast.service';



export class CustomHttpInterceptor implements HttpInterceptor {
    
    users_login:Users=new Users()
    constructor(private router:Router,private ToastService:ToastService){}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${localStorage.getItem("access_token")}`
        }
      });
      return next.handle(request).do((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          // do stuff with response if you want
        }
      }, (err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            // redirect to the login route
            // or show a modal
            console.log("שגיאה מקריאה מהשרת")
            this.router.navigate(["pages/login"])
          }
          if (err.status===403){
            this.ToastService.showToast('fail', ' אין לך הרשאות נא ליצור קשר עם מנהל המערכת','') 
            this.router.navigate(["pages/login"])
          }
        }
      });
    }
    
}
