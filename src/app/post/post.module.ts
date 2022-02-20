import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { PostMainComponent } from './post-main/post-main.component';
import { MarkdownModule } from 'ngx-markdown';

@NgModule({
  declarations: [PostMainComponent],
  imports: [CommonModule, PostRoutingModule, MarkdownModule.forChild()],
})
export class PostModule {}
