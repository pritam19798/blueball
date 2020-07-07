import { Component } from '@angular/core';
import { Ball } from './ball/ball';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blueball';
  balls:Ball[];
  initial_number_of_ball:number=1;
  total_number_of_ball:number=50;
  startPlaying:boolean=false
  randomBallNumber:number
  playerMoveUsed:number;
  playerMove:number
  win:boolean=false
  gameOver:boolean=false

  startGame(){
    this.balls=[]
    this.randomBallNumber = Math.floor(Math.random() * this.total_number_of_ball) + 1;

    this.playerMove=3;
    this.playerMoveUsed=0;

    this.startPlaying=true;
    this.win=false;
    this.gameOver=false;

    for(let index=this.initial_number_of_ball;index<=this.total_number_of_ball;index++){
      this.balls.push(new Ball(index,'white'))
    }

  }


  ballClicK(selecetedBall:Ball){
    this.playerMoveUsed++;
    if (selecetedBall.index== this.randomBallNumber && !this.win && !this.gameOver ) {
      this.win=true
      this.gameOver=false
      selecetedBall.state='blue'
      this.endGame();
      return;
    }

    if (selecetedBall.index> this.randomBallNumber && !this.win && !this.gameOver) {
      selecetedBall.state='red'
    }

    if (selecetedBall.index < this.randomBallNumber && !this.win && !this.gameOver) {
      selecetedBall.state='green'
    }

    if (this.playerMoveUsed==this.playerMove  && !this.win) {
      this.gameOver=true
      this.win=false
      this.balls[this.randomBallNumber].state='blue'
      this.endGame();
      return;
    }
  }

  endGame(){
    setTimeout(()=>{
      this.startPlaying=false
    },3000);
  }
}
