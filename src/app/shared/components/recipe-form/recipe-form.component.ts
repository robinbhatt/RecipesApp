import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormGroupDirective, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { AuthService } from 'src/app/authentication/shared/auth.service';

@Component({
  selector: 'recipe-form',
  templateUrl: './recipe-form.component.html',
  styleUrls: ['./recipe-form.component.css']
})
export class RecipeFormComponent { // implements OnInit {


  loginMode=true;
  recipeForm: FormGroup;
  isLoading:boolean = false;
  responseError = '';  
  @ViewChild(FormGroupDirective,{ static: false}) formGroupDirective: FormGroupDirective;
  get formError() { return this.recipeForm.controls; }

  constructor(
    private _fb:FormBuilder,
    private _authService: AuthService,
    private router:Router
  ) { }

  ngOnInit() {
    this.recipeForm = this._fb.group({
      email : ['',[Validators.required,Validators.minLength(5),Validators.email]],
      password : ['',[Validators.required,Validators.minLength(6)]],
      profileUrl : [''],
    })
  }

  switchLogin(){
    this.loginMode = !this.loginMode;
    this.formGroupDirective.resetForm()
  }

  onSubmit() { 

    if(this.recipeForm.invalid){ return; }

    const email:string = this.recipeForm.value.email;
    const password:string = this.recipeForm.value.password;
    const profileUrl:string = this.recipeForm.value.profileUrl;
    this.formGroupDirective.resetForm()
    this.isLoading = true;

    if(this.loginMode){
      this._authService.signInWithEmailAndPassword_Firebase(email, password, profileUrl)
      .pipe(
        finalize(()=> this.isLoading = false)
      )
      .subscribe(
        (resData)=> {
        console.log(resData);
        this.isLoading = false;
        this.router.navigateByUrl('/all-recipes');
      },
      (err)=>{
        console.log(err);
        const errCode = err.error.error.code;
        const errMsg = err.error.error.message;
        this.responseError = `An error occured. Code : ${errCode} Message : ${errMsg}`
      }
       )
    } else {
      this._authService.signUpWithEmailAndPassword_Firebase(email, password, profileUrl)
      .pipe(
        finalize(()=> this.isLoading = false)
      )
      .subscribe(
        (resData)=> { 
        console.log(resData);
        this.isLoading = false;
        this.router.navigateByUrl('/all-recipes');
      },
      (err)=>{
        console.log(err);
        const errCode = err.error.error.code;
        const errMsg = err.error.error.message;
        this.responseError = `An error occured. Code : ${errCode} Message : ${errMsg}`
      }
       )
    }


  }


}
