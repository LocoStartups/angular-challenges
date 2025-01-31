import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatListModule } from '@angular/material/list';

import { UserService } from '../../../../services/user.service';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'user-list',
  imports: [CommonModule, UserComponent, MatListModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css',
})
export default class UsersComponent {
  public userService = inject(UserService);
}
