import { Component, signal } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Character } from './components/character/character';
import { Comment } from './components/comment/comment';

@Component({
  selector: 'app-root',
  imports: [Navbar, Character, Comment],
  templateUrl: './app.html',
  styleUrl: './app.css',

})
export class App {
  protected readonly title = signal('angular-ui');
}
