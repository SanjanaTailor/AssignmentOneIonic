import { Component } from '@angular/core';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  newTodo: string = '';

  constructor(public todoService: TodoService) {}

  ionViewDidEnter() {
    this.todoService.loadTodos();
  }

  addTodo() {
    if (this.newTodo.trim() !== '') {
      this.todoService.addTodo(this.newTodo);
      this.newTodo = '';
    }
  }

  toggleCompletion(index: number) {
    this.todoService.toggleCompletion(index);
  }

  deleteTodo(index: number) {
    this.todoService.deleteTodo(index);
  }

  get todos() {
    return this.todoService.getTodos();
  }
}
