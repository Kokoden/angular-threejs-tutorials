import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HomepageMainComponent } from './homepage-main/homepage-main.component';
import { HeaderNavbarComponent } from './header-navbar/header-navbar.component';

@NgModule({
  declarations: [HeaderComponent, HomepageMainComponent, HeaderNavbarComponent],
  imports: [CommonModule],
  exports: [HomepageMainComponent],
})
export class HomepageModule {}
