import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
interface BlogPreview {
  id: string;
  title: string;
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
    preview: `This is a preview of the blog post. Hopefully it's long enough to be two sentences long.`,
    tags: ['Angular', 'Threejs'],
  };
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToPage(tag: string): void {
    this.router.navigate([tag.toLocaleLowerCase()]);
  }

  goToPost(id: string): void {
    this.router.navigate(['posts/' + id]);
  }
}
