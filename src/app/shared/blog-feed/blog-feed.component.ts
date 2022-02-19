import { Component, OnInit } from '@angular/core';
import data from 'src/assets/posts.json';

@Component({
  selector: 'app-blog-feed',
  templateUrl: './blog-feed.component.html',
  styleUrls: ['./blog-feed.component.scss'],
})
export class BlogFeedComponent implements OnInit {
  blogs = data;
  constructor() {}

  ngOnInit(): void {}
}
