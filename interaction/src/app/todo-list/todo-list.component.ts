import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../todo.interface';

@Component({
  selector: 'app-todo-list',
  template: `
    <ul>
      <li *ngFor="let todo of todos">
        <input type="checkbox" 
        [checked]="todo.completed"
        (change)="checkTodo(todo.id)"
        >
        <span [class.cancel]="todo.completed">{{todo.content}}</span>
        <button (click)="removeTodo(todo.id)">X</button>
      </li>
    </ul>
  `,
  styles: [`
    .cancel {
      text-decoration: line-through;
    }
  `]
})
export class TodoListComponent {
  @Input() todos: Todo[];
  @Output() remove = new EventEmitter();
  @Output() check = new EventEmitter();

  removeTodo(id: number) {
    this.remove.emit(id);
  }

  checkTodo(id: number) {
    this.check.emit(id);
  }
}
