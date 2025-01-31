import { Component, inject, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { User } from '../../../../interfaces/user.interface';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'user',
  imports: [MatListModule, MatIconModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  public userService = inject(UserService);

  @Input({ required: true }) user!: User;

  update(user: User) {
    this.userService.update(user);
  }

  delete(user: User) {
    this.userService.delete(user);
  }
}
