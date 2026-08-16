import { Component } from '@angular/core';
import { Character } from '../character/character';
import { Comment } from '../comment/comment';

@Component({
  selector: 'app-home',
  imports: [Character, Comment],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
