import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { UserResultPageComponent } from './user-result-page/user-result-page.component';

const routes: Routes = [
  {path:'home',component:LandingPageComponent},
  {path:'user',component:UserResultPageComponent},
  {path:'repositories',component:RepositoriesComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
