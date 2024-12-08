import { Component, Input, OnInit } from '@angular/core';
import { RandomService } from '../random.service';

@Component({
  selector: 'app-random',
  template: `
    <button (click)="handleClick()">random</button>
    <div [style.color]="getColor()">
      {{randomNumber}}  
      {{getColor() === 'red' && randomNumber !== null ? 
        'liczba jest większa niż połowa górnej wartości przedziału (' + upperBound + ')' : 
        'liczba jest mniejsza niż połowa górnej wartości przedziału (' + upperBound + ')'}}
    </div>
  `,
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {
  @Input() upperBound!: number;
  randomNumber: number | null = null;

  constructor(private randomService: RandomService) {}

  ngOnInit(): void {
    if (this.upperBound) {
      this.handleClick();
    }
  }

  handleClick(): void {
    if (this.upperBound) {
      this.randomNumber = this.randomService.random(this.upperBound);
    }
  }

  getColor(): string {
    return this.randomNumber! <= this.upperBound * 0.5 ? 'green' : 'red';
  }
}
