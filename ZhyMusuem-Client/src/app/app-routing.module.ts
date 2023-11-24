import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleArtworkDetailsComponent } from './components/single-artwork-details/single-artwork-details.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ArtworkListComponent } from './components/artwork-list/artwork-list.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'artwork-list', component: ArtworkListComponent },
  // { path: 'explore', component: ArtworkListComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'single-artwork/:id', component: SingleArtworkDetailsComponent },
  { path: 'signup', component: SignupComponent },

  {
    path: "**", 
    component: PageNotFoundComponent,
  }
];

// <a routerLink="">WHAT'S ON</a><br>
// <a routerLink="explore">EXPLORE</a><br>
// <a routerLink="contact">REACH US</a><br>


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
