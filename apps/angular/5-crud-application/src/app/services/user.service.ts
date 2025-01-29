import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { randText } from '@ngneat/falso';
import { map } from 'rxjs';
import { User } from '../interfaces/user.interface';

@Injectable({ providedIn: 'root' })
export class UserService {
  private http = inject(HttpClient);

  public users = signal<User[]>([]);

  constructor() {
    this.http
      .get<User[]>('https://jsonplaceholder.typicode.com/todos')
      .subscribe((resp) => {
        this.users.set(resp);
      });
  }

  update(user: User) {
    this.http
      .put<User>(`https://jsonplaceholder.typicode.com/todos/${user.id}`, user)
      .pipe(
        map((resp: User) => ({
          ...resp,
          title: randText(),
        })),
      )
      .subscribe((resp: User) => {
        this.users.set(this.users().map((u) => (u.id === resp.id ? resp : u)));
      });
  }

  delete(user: User) {
    this.http
      .delete(`https://jsonplaceholder.typicode.com/todos/${user.id}`)
      .subscribe(() => {
        this.users.set(this.users().filter((u) => u.id !== user.id));
      });
  }
}
