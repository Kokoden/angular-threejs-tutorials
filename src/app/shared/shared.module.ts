import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogCardComponent } from './blog-card/blog-card.component';
import { BlogFeedComponent } from './blog-feed/blog-feed.component';

@NgModule({
  declarations: [BlogCardComponent, BlogFeedComponent],
  imports: [CommonModule],
  exports: [BlogCardComponent, BlogFeedComponent],
})
export class SharedModule {}
