import { Component } from '@angular/core';
import { Todo } from '../todo.interface';

@Component({
  selector: 'app-todos',
  template: `
    <app-todo-input (add)="addTodo($event)"></app-todo-input>
    <app-todo-list [todos]="todos"
      (remove)="removeTodo($event)"
      (check)="checkTodo($event)"
    ></app-todo-list>
    <pre>{{ todos | json }}</pre>
  `,
  styles: []
})
export class TodosComponent {
  todos: Todo[] = [
    { id: 1, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'JS', completed: false }
  ];

  addTodo(content: HTMLInputElement) {
    this.todos = [...this.todos, { id: this.getId(), content: content.value, completed: false }];
    content.value = '';
  }

  removeTodo(todoid: number) {
    this.todos = this.todos.filter(({ id }) => todoid !== id);
  }

  checkTodo(todoid: number) {
    this.todos = this.todos.map(todo => todoid === todo.id ? { ...todo, completed: !todo.completed } : todo);
  }

  getId() {
    return this.todos.length ? Math.max(...this.todos.map(({ id }) => id)) + 1 : 1;
  }
}
