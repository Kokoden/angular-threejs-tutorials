import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'post-main',
  templateUrl: './post-main.component.html',
  styleUrls: ['./post-main.component.scss'],
})
export class PostMainComponent implements OnInit {
  id: string = '1';
  path = 'assets/files/articles/1.md';
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.id = this.router.url.split('/')[2];
    this.path = `assets/files/articles/${this.id}.md`;
  }

  onError(error: any): void {
    this.router.navigate(['home']);
  }
}
