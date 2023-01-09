import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { TaskListComponent } from './task-list/task-list.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,  ],
  declarations: [ AppComponent, HelloComponent,TaskFormComponent, TaskListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
