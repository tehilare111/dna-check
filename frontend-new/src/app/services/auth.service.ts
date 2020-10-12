import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { userInfo } from 'os';

@Injectable({
  providedIn: 'root'
})

export class AuthService  {
    checkPermissions(arrayPermission)
    {
        return arrayPermission.includes(localStorage.getItem("permissions"))
    }
}