import { Component } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-c',
  template: `
    C: <input type="text"
        (input)="dataService.data= $event.target.value"
        [value] = "dataService.data" >
    `,
  styles: []
})
export class CComponent {
  constructor(public dataService: DataService) { }
}
