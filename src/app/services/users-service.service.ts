import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddUsers } from '../interfaces/add-users';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersServiceService {

  constructor(private http:HttpClient) { }
  url='http://127.0.0.1:5000/api/addUser'
  private messageSubject=new BehaviorSubject('')
  message$=this.messageSubject.asObservable()
  addUsers(users:AddUsers){
    this.http.post(this.url,users).subscribe(
      (response:any)=>{
        this.messageSubject.next(response.message)
      },
      (error)=>{       
        this.messageSubject.next(error.error.message||'An error occured')
        console.error(error)
      },
    )
  }
}
