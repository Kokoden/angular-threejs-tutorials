import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageModule } from './homepage/homepage.module';
import { NavbarComponent } from './navbar/navbar.component';
import { AngularComponent } from './angular/angular.component';
import { ThreejsComponent } from './threejs/threejs.component';
import { SharedModule } from './shared/shared.module';
import { PostModule } from './post/post.module';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AngularComponent,
    ThreejsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomepageModule,
    SharedModule,
    PostModule,
    MarkdownModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
