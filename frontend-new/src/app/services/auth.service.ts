import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { userInfo } from 'os';

@Injectable({
  providedIn: 'root'
})

export class AuthService  {
    checkPermissions(array_permission)
    {
        return array_permission.includes(localStorage.getItem("permissions"))
    }
}