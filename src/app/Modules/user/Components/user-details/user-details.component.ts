import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/userService/user.service';
import { UserData } from '../../Models/userModel';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { LoadingComponent } from 'src/app/Compnents/loading/loading.component';
import { LoadingService } from 'src/app/Services/loadingService/loading.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

  private user?: UserData;
  private userId!: string | null; 

  constructor(private userService: UserService,
     private activatedRoute: ActivatedRoute ,
      private router:Router,
    private loadingService:LoadingService) {

  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe({
      next: (paramMap) => {
       
        this.loadingService.startLoading(); 
        this.userId = paramMap.get('id');

        if (this.userId) {
          const idAsNumber = parseInt(this.userId, 10); 
          this.userService.getUserById(idAsNumber).subscribe({
           next:(res)=>{
            if(!res){
                this.router.navigate(['notFound'])
              }
              else {this.user = res.data}
            },
            error:(err)=>{this.router.navigate(['notFound'])}
          });
        } else {
          this.router.navigate(['notFound'])
        }
      }
    });
  }

  public get User(){
    return this.user; 
  }
}
