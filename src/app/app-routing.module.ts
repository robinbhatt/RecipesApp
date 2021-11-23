import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthGuard } from './authentication/shared/auth.guard';
import { AuthenticationComponent } from './authentication/authentication.component';
import { RecipeLayoutComponent } from './recipe-layout/recipe-layout.component';

const routes: Routes = [
  {path:'', redirectTo:'all-recipes', pathMatch:'full'},

  { path:'all-recipes', component:RecipeLayoutComponent, canActivate:[ AuthGuard] },
  { path:'all-recipes/:recipe', component:RecipeLayoutComponent, canActivate:[ AuthGuard] },

  { path: 'auth', component:AuthenticationComponent },

  { path: '**', component:RecipeLayoutComponent, canActivate:[ AuthGuard] },
]


  ;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
