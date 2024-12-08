import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RandomService {

  constructor() { }

  public random(upperBound: number): number {
    return Math.floor(Math.random() * upperBound) + 1;
  }
}
