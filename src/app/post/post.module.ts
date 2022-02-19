import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostMainComponent } from './post-main/post-main.component';


@NgModule({
  declarations: [
    PostMainComponent
  ],
  imports: [
    CommonModule,
    PostRoutingModule
  ]
})
export class PostModule { }
