import { Component, inject } from '@angular/core';
import { PostService } from '../post.service';
import { Post } from '../post';
import { CommonModule } from '@angular/common';
import { PostsComponent } from '../posts/posts.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, PostsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  posts: Post[] = [];
  postService = inject(PostService);

  constructor() {
    this.postService.getAllPosts().then((posts: Post[]) => {
      this.posts = posts;
    });
  }
}
