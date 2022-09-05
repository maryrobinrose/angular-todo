import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from '../shared/data.service';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  //todos property. this connects to ngFor in the template
  todos: Todo[];

  //property to hide or show validation error
  showValidationErrors: boolean;

  //set value of the property
  //inject the service
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.todos = this.dataService.getAllTodos();
  }

  onFormsubmit(form: NgForm) {

    //show errors if invalid
    if (form.invalid) return this.showValidationErrors = true;

    //this adds a todo
    this.dataService.addTodo(new Todo(form.value.text ));

    //prevents validation from showing up when form is reset after a todo is added
    this.showValidationErrors = false;

    //removes text in the input after todo has been added
    form.reset();

  }

  //set todo to completed
  toggleCompleted(todo: Todo) {
   todo.completed = !todo.completed;
  }

}
