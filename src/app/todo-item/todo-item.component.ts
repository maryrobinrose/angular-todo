import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})

//AfterViewInit is a lifecycle hook, need access to html elements
export class TodoItemComponent implements OnInit {

  //set property to an input property
  @Input() todo: Todo;

  //emits even each time todo is clicked
  //parent component (todo.component) can use event binding to listen to the vents
  //void doesn't send any data, just a signal
  @Output() todoClicked: EventEmitter<void> = new EventEmitter();
  @Output() editClicked: EventEmitter<void> = new EventEmitter();
  @Output() deleteClicked: EventEmitter<void> = new EventEmitter();

  test: string = "Default Value";

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.test = "New Value"
    }, 1000)
  }

  onTodoClicked() {
    this.todoClicked.emit();
  }

  onEditClicked() {
    this.editClicked.emit();
  }

  onDeleteClicked() {
    this.deleteClicked.emit();
  }

}
