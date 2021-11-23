import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

import { RecipeLayoutComponent } from './recipe-layout/recipe-layout.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { HeaderComponent } from './header/header.component';
import { RecipeComponent } from './recipe-layout/recipe/recipe.component';
import { RecipeModalComponent } from './recipe-layout/recipe-modal/recipe-modal.component';

// import { AngularFireModule } from '@angular/fire';
// import { AngularFirestoreModule } from '@angular/fire/firestore';
// import { environment } from 'src/environments/environment';



@NgModule({
  declarations: [
    AppComponent,
    RecipeLayoutComponent,
    AuthenticationComponent,
    HeaderComponent,
    RecipeComponent,
    RecipeModalComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,


    // AngularFireModule.initializeApp(environment.firebase),
    // AngularFirestoreModule,


    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
