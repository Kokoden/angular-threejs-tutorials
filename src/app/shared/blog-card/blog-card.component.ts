import { Component, Input, OnInit } from '@angular/core';
interface BlogPreview {
  id: string;
  title: string;
  author: string;
  preview: string;
  tags: string[];
}
@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss'],
})
export class BlogCardComponent implements OnInit {
  @Input() post: BlogPreview = {
    id: '000',
    title: 'Sample Text',
    author: 'Author Name',
    preview: `This is a preview of the blog post. Hopefully it's long enough to be two sentences long.`,
    tags: ['Angular', 'Threejs'],
  };
  constructor() {}

  ngOnInit(): void {}
}
