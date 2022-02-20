import { Component, OnInit } from '@angular/core';
import data from 'src/assets/files/posts.json';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.scss'],
})
export class AngularComponent implements OnInit {
  posts: any[] = [];
  constructor() {}

  ngOnInit(): void {
    this.posts = data.filter((post) => post.tags.includes('Angular'));
  }
}
