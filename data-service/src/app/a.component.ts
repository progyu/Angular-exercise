import { Component } from '@angular/core';
import { DataService } from './data.service'

@Component({
  selector: 'app-a',
  template: `
    A: <input type="text" 
        (input)="dataService.data = $event.target.value"
        [value]="dataService.data"> `,
  styles: []
})
export class AComponent {
  constructor(public dataService: DataService) { }
}
