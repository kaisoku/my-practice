import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
import { Post } from '../post';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  postService = inject(PostService);
  route: ActivatedRoute = inject(ActivatedRoute);
  post: Post;

  applyForm = new FormGroup({
    title: new FormControl(''),
    comment: new FormControl(''),
  });
  constructor() {
    const postId = parseInt(this.route.snapshot.params['id'], 10);
    this.postService.getPostById(postId).then((post: Post) => {
      this.post = post;
    });
  }

  submitComment() {
    this.postService.submitForm(
      this.applyForm.value.title ?? '',
      this.applyForm.value.comment ?? ''
    );
  }
}
