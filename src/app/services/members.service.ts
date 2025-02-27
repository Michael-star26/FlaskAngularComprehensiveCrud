import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
interface User {
  id: number;
  uuid: string;
  firstname: string;
  lastname: string;
  username: string;
  password: string;
  email: string;
  ip: string;
  macAddress: string;
  website: string;
  image: string;
};
interface ApiResponse {
  status: string;
  code: number;
  locale: string;
  seed: any;
  total: number;
  data: User[];
};

@Injectable({
  providedIn: 'root'
})
export class MembersService {
  version='v2'
  apiUrl=`https://fakerapi.it/api/${this.version}/users?_quantity=90`
  constructor(private http:HttpClient) { 
    this.getMembers()
    this.getMembers()
  }
  private dataSubject:BehaviorSubject<User[]>=new BehaviorSubject<User[]>([])
  public data$=this.dataSubject.asObservable()
   
  getMembers(){
    this.http.get<ApiResponse>(this.apiUrl).subscribe(
      (response:any)=>{
        console.log('Success')
        this.dataSubject.next(response.data)
      },
      (error)=>{
        console.error(error) 
      }
    )
  }

}
