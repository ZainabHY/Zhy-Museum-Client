import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleArtworkDetailsComponent } from './components/single-artwork-details/single-artwork-details.component';

const routes: Routes = [

  { path: 'single-artwork/:id', component: SingleArtworkDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
