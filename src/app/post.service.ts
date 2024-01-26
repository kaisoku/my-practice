import { Injectable } from '@angular/core';
import { Post } from './post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  url = 'https://jsonplaceholder.typicode.com/posts';

  constructor() {}

  async getAllPosts(): Promise<Post[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  async getPostById(id: number): Promise<Post | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    return (await data.json()) ?? {};
  }

  submitForm(title: string, comment: string) {
    console.log('titre: ' + title, 'commentaire ' + comment);
  }
}
