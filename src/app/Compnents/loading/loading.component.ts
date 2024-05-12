import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/Services/loadingService/loading.service';

@Component({
  selector: 'app-loading',
  template: `
    <div class="loading-container" *ngIf="isLoading">
      <div class="loading-indicator">
        <p>Loading...</p>
      </div>
    </div>
  `,
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit{

  constructor(private loadingService:LoadingService){}
  public isLoading = false ;
  private timeCounter:number  = 0; 

  public startLoad(){
    this.isLoading =true ; 
    this.timer()
  }

  public endLoad(){
    this.isLoading = false ; 
    this.timeCounter = 0 ;
  }

  public timer(){
    setInterval(()=>{this.timeCounter++; if(this.timeCounter ==1)this.endLoad()},1500)
  }

  ngOnInit(){
    this.loadingService.loadingState$.subscribe(
      {next:(b)=>{
        if(b){this.startLoad()}else{this.endLoad()}
      }}
    )
  }
}
