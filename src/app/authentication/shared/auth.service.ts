import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthResponseData } from '../shared/auth-response.model';
import { User } from '../shared/user.model';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userBehaviorSub = new BehaviorSubject<User | null>(null);

  constructor(private _httpService:HttpClient) { }

  signUpWithEmailAndPassword_Firebase(email:string,password:string){
    return this._httpService
    .post<AuthResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBKNbdrHjkIrHaMT4AETYhBmojHC-sEdyU`,
    { email : email, password : password, returnSecureToken	: true})
    .pipe(
      tap((userObject)=>{
        const expirationDate = new Date(new Date().getTime() + +userObject.expiresIn * 1000);
        const user = new User(userObject.email, userObject.localId, userObject.idToken, expirationDate);
        this.userBehaviorSub.next(user);
      })
    )
  }

  signInWithEmailAndPassword_Firebase(email:string,password:string){
    return this._httpService
    .post<AuthResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBKNbdrHjkIrHaMT4AETYhBmojHC-sEdyU`,
    { email : email, password : password, returnSecureToken	: true})
    .pipe(
      tap((userObject)=>{
        const expirationDate = new Date(new Date().getTime() + +userObject.expiresIn * 1000);
        const user = new User(userObject.email, userObject.localId, userObject.idToken, expirationDate);
        this.userBehaviorSub.next(user);
      })
    )
  }




}

    // .pipe(
    //   map((response)=>{
    //     return response as AuthResponseData
    //   }),
    //   catchError((error:HttpErrorResponse)=>{
    //     console.log(error)
    //    return throwError(error)})
    // )