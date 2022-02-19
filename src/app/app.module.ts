import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageMainComponent } from './homepage/homepage-main/homepage-main.component';
import { HomepageModule } from './homepage/homepage.module';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [BrowserModule, AppRoutingModule, HomepageModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
