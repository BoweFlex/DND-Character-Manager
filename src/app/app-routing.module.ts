import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './navigation/about/about.component';
import { HomeComponent } from './navigation/home/home.component';
import { CharactersComponent } from './navigation/characters/characters.component';
import { ContactComponent } from './navigation/contact/contact.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'characters', component: CharactersComponent},
  {path: 'contact', component: ContactComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
