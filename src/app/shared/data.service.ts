import { ThisReceiver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //create some mock data we can use
  //set it to an array of objects
  todos: Todo[] = [
    new Todo('this is a test'),
    new Todo('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.')
  ]

  constructor() { }

  //method
  getAllTodos() {
    return this.todos;
  }

  //method
  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  //method
  //takes updatedTodo object
  updateTodo(index: number, updatedTodo: Todo) {
    //grab the one at the specified index
    //set it to updated todo object
    this.todos[index] = updatedTodo;
  }

  //method
  //index is the specified position in the index's array
  deleteTodo(index: number) {
    //splice() method changes the contents of an array by removing or replacing existing elements
    //1 removes one element
    this.todos.splice(index, 1)
  }

}
