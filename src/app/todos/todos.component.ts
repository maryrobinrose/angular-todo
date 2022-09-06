import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { EditTodoDialogComponent } from '../edit-todo-dialog/edit-todo-dialog.component';
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
  constructor(
    private dataService: DataService,
    private dialog: MatDialog
    ) { }

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

  editTodo(todo: Todo) {

      const index = this.todos.indexOf(todo);

      let dialogRef = this.dialog.open(EditTodoDialogComponent, {
        width: '700px',
        //pass in data so the input actually edits the todo
        data: todo

      });

      //this is an observable
      dialogRef.afterClosed().subscribe((result) => {
        //if there's a result (it could be null)
        if (result) {
          this.dataService.updateTodo(index, result);
        }
  
      })  
  }

  deleteTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    this.dataService.deleteTodo(index);
  }

}
