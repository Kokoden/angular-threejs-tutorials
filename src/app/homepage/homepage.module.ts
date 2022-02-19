import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomepageMainComponent } from './homepage-main/homepage-main.component';
import { HeaderNavbarComponent } from './header-navbar/header-navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { HomepageRoutingModule } from './homepage-routing.module';

@NgModule({
  declarations: [HeaderComponent, HomepageMainComponent, HeaderNavbarComponent],
  imports: [CommonModule, HttpClientModule, HomepageRoutingModule],
  exports: [HomepageMainComponent],
})
export class HomepageModule {}
