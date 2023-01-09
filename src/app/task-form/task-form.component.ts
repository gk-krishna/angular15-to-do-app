import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css'],
})
export class TaskFormComponent implements OnInit {
  @Input() taskList;
  newTodo: string;
  constructor() {}

  ngOnInit() {}
  addTodo() {
    this.taskList.unshift(this.newTodo);
    localStorage.setItem('tasks', JSON.stringify(this.taskList));
    this.newTodo = '';
  }
}
