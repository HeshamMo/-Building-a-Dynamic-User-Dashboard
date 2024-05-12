import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/userService/user.service';
import { UserData } from '../../Models/userModel';
import { LoadingService } from 'src/app/Services/loadingService/loading.service';

@Component({
  selector: 'app-users-dashboard',
  templateUrl: './users-dashboard.component.html',
  styleUrls: ['./users-dashboard.component.scss']
})
export class UsersDashboardComponent implements OnInit {


  private users?:UserData[]; 
  public total!:number; 
  
  public page!:number ; 
  public totalpages!:number; 
  
  ngOnInit(): void {
    this.getUsers() ; 
  }

  constructor(private userService : UserService , private loadingService:LoadingService){
    this.total =0 ; 
    this.page = 1 ;
    this.totalpages = 1 ;
  }

  public getUsers(){
    this.loadingService.startLoading();
    this.userService.getUsers(this.page)
    .subscribe({
      next:(res)=>{
       
        this.users = res.data ; 
        this.total = res.total ;

        this.page = res.page ; 
        this.totalpages = res.total_pages ; 
      }
    })
  }

  
  get currentUsers(){
    return this.users  ;
  }

  public getNextPage(){
    this.page++ ; 
    this.getUsers() ; 
  }
  public getPrevPage(){
    this.page-- ; 
    this.getUsers() ; 
  }

  public getCertainPage(pageNum:number){
      this.page = Number(pageNum)
      this.getUsers();
  }
}
