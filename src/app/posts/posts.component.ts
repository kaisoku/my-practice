import { Component, Input } from '@angular/core';
import { Post } from '../post';
import { RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [RouterLink, RouterOutlet],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css',
})
export class PostsComponent {
  @Input() post!: Post;
}
