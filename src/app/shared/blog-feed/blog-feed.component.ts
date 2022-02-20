import { Component, Input, OnInit } from '@angular/core';
import data from 'src/assets/files/posts.json';

@Component({
  selector: 'app-blog-feed',
  templateUrl: './blog-feed.component.html',
  styleUrls: ['./blog-feed.component.scss'],
})
export class BlogFeedComponent implements OnInit {
  @Input() feed = data;
  constructor() {}

  ngOnInit(): void {}
}
