import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import UsersComponent from './components/users/users.component';

@Component({
  imports: [CommonModule, UsersComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {}
