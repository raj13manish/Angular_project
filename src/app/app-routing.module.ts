import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { FoodPageComponent } from './components/pages/food-page/food-page.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { SignupComponent } from './components/pages/signup/signup.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'search/:searchTerm', component: HomeComponent },
  { path: 'tag/:tag', component: HomeComponent },
  {path:'food/:id', component:FoodPageComponent},
  {path:'cart-page', component: CartPageComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
