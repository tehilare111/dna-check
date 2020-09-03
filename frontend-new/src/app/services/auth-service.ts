import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../@core/data/users';
import { userInfo } from 'os';

@Injectable({
  providedIn: 'root'
})

export class AuthService  {
    check_permissions(array_permission)
    {
        return array_permission.includes(localStorage.getItem("permissions"))
    }
}