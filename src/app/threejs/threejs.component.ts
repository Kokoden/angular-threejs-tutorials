import { Component, OnInit } from '@angular/core';
import data from 'src/assets/files/posts.json';

@Component({
  selector: 'app-threejs',
  templateUrl: './threejs.component.html',
  styleUrls: ['./threejs.component.scss'],
})
export class ThreejsComponent implements OnInit {
  posts: any[] = [];
  constructor() {}

  ngOnInit(): void {
    this.posts = data.filter((post) => post.tags.includes('Threejs'));
  }
}
