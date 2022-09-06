import { Component, Inject, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-edit-todo-dialog',
  templateUrl: './edit-todo-dialog.component.html',
  styleUrls: ['./edit-todo-dialog.component.scss']
})
export class EditTodoDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<EditTodoDialogComponent>,

    //dialog data with the token
    @Inject(MAT_DIALOG_DATA) public todo: Todo
    ) { }

  ngOnInit(): void {
  }

  close() {
    //no result on close, like canceling the dialog
    this.dialogRef.close();
  }

  onFormSubmit(form: NgForm) {
    if (form.invalid) return

    //create new object
    //set it to all of the fields from this.todo
    //creating an object like this makes it scalable 
    const updatedTodo = {
      //provides all the fields and values of this.todo
      ...this.todo,
      ...form.value

    }


    //close with a value
    //pass in the object
    this.dialogRef.close(updatedTodo);
  }

}
