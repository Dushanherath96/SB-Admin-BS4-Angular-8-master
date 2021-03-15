import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
 import {config} from '../config/config';
@Injectable({
  providedIn: 'root'
})
export class UserService {
    private currentUserSubject: BehaviorSubject<any>;
    private currentUser: Observable<any>;
  constructor(private http:HttpClient) {

    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();


  }

    public get currentUserValue(){
        return this.currentUserSubject.value
    }

  register(data):Observable<any>{
    return this.http.post<any>(config.LEARNERS+`/users/register`,data)
  }
}
