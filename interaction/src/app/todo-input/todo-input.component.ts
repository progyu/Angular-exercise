import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  template: `
    <input type="text" 
      placeholder="할 일 입력"
      (keyup.enter)="addTodo(input)"
    #input>
  `,
  styles: []
})
export class TodoInputComponent {
  @Output() add = new EventEmitter();

  addTodo(content: HTMLInputElement) {
    this.add.emit(content);
  }
}
