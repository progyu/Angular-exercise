import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  template: `
    <input 
      type="text" 
      placeholder="할 일 입력"
      (keyup.enter)="addTodo(input)"
      #input />
  `,
  styles: []
})
export class TodoInputComponent {
  @Output() add = new EventEmitter();

  addTodo(input: HTMLInputElement) {
    if (!input.value.trim()) return;
    this.add.emit(input.value);
    input.value = '';
  }
}
