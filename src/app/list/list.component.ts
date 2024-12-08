import { Component} from '@angular/core';

@Component({
  selector: 'app-list',
  imports: [],
  // templateUrl: './list.component.html',
  template: ` 
    <p>Lista</p>
    <input type="text" #text>
    <button (click)="save(text.value)">Save</button>
    <ul>
      @for (text of texts; track $index) {
      <li>
        <span>{{ text }}</span>&nbsp;
        <a href="#" (click)="delete($index)">delete</a>
      </li>
      }
    </ul>
  `,
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  texts: string[] = [];

  save(text: string): void {
    if (text) { 
      this.texts.push(text);
    }
  }

  delete(index: number) {
    this.texts.splice(index, 1);
  }
}
