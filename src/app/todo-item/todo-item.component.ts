import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  //set property to an input property
  @Input() todo: Todo;

  //emits even each time todo is clicked
  //parent component (todo.component) can use event binding to listen to the vents
  //void doesn't send any data, just a signal
  @Output() todoClicked: EventEmitter<void> = new EventEmitter();

  @Output() editClicked: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onTodoClicked() {
    this.todoClicked.emit();
  }

  onEditClick() {
    this.editClicked.emit();
  }

}
