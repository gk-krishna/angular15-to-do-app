import { Component, OnInit, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Todo App';
  taskList: string[] = [];

  ngOnInit(): void {
    if(localStorage.getItem('tasks')) {
      this.taskList = JSON.parse(localStorage.getItem('tasks'))
    }
  }

}
