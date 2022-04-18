import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { UserResultPageComponent } from './user-result-page/user-result-page.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { RepositoriesComponent } from './repositories/repositories.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ErrorPageComponent } from './error-page/error-page.component';
import { MonthCounterPipe } from './month-counter.pipe';
import { UnknownSearchDirective } from './unknown-search.directive';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    UserResultPageComponent,
    NavigationBarComponent,
    RepositoriesComponent,
    ErrorPageComponent,
    MonthCounterPipe,
    UnknownSearchDirective,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
