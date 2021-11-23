import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../authentication/shared/auth.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,OnDestroy {

  userAuthSubscription : Subscription
  isUserAuthenticated = false
  constructor(private _authService:AuthService) { }

  ngOnInit(): void {
    this.userAuthSubscription = this._authService.userBehaviorSub.subscribe(user=>{ 
      console.log(user);
      this.isUserAuthenticated = !!user;
    })
  }

  ngOnDestroy(){
    this.userAuthSubscription.unsubscribe();
  }

}
