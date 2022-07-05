import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { AppRountingModule } from './app-rounting.module';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponentComponent } from './heroes-component/heroes-component.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    HeroesComponentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRountingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
