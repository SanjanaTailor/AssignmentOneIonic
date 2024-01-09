import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  todos: any[] = [];

  constructor(private storage: Storage) {}

  async loadTodos() {
    this.todos = (await this.storage.get('todos')) || [];
  }

  async saveTodos() {
    await this.storage.set('todos', this.todos);
  }

  getTodos() {
    return this.todos;
  }

  addTodo(title: string) {
    const newTodo = {
      title: title,
      completed: false,
    };
    this.todos.push(newTodo);
    this.saveTodos();
  }

  toggleCompletion(index: number) {
    this.todos[index].completed = !this.todos[index].completed;
    this.saveTodos();
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
    this.saveTodos();
  }
}
