import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class LoadingService {

  public loadingState$ = new Subject<boolean>();

  startLoading() {
    
    this.loadingState$.next(true); 
  }

  stopLoading() {
    this.loadingState$.next(false); 

  }

}
