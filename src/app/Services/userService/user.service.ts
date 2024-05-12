import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { getUserByidApiResponse, getUsersApiResponse } from 'src/app/Modules/user/Models/userModel';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient :HttpClient) {
    
   }

   public getUsers(pageNumber:number):Observable<getUsersApiResponse>{
    return this.httpClient.get<getUsersApiResponse>(environment.userBaseUrl ,{params:{page:pageNumber}});
   }

   public getUserById(userId:number):Observable<getUserByidApiResponse>{
    return this.httpClient.get<getUserByidApiResponse>(`${environment.userBaseUrl}/${userId}`) ;
   }
}
