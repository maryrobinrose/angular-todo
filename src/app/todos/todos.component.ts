import { Component, OnInit } from '@angular/core';
import { DataService } from '../shared/data.service';
import { Todo } from '../shared/todo.model';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  //todos property. this connects to ngFor in the template
  todos: Todo[]

  //set value of the property
  //inject the service
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.todos = this.dataService.getAllTodos();
  }

}
