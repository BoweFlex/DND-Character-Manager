import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './navigation/about/about.component';
import { HomeComponent } from './navigation/home/home.component';
import { ContactComponent } from './navigation/contact/contact.component';
import { CharactersComponent } from './navigation/characters/characters.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    CharactersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
