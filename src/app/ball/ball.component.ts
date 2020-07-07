import { Component, OnInit, Input } from '@angular/core';
import { Ball } from './ball';

@Component({
  selector: 'app-ball',
  templateUrl: './ball.component.html',
  styleUrls: ['./ball.component.css']
})
export class BallComponent implements OnInit {

  @Input() ball:Ball;
  constructor() { }

  ngOnInit(): void {
  }

}
