import { TaskslistService } from './../taskslist.service';
import { Component, OnInit } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';
import { todo_item } from '../todoitem/todoitem';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {
  items:Array<todo_item>;
  constructor(private task:TaskslistService) { 

  }

  ngOnInit(): void {
    let obj= new todo_item();
    this.task.givetask().subscribe(newitem=>{
      obj.title = newitem[0].title;
      obj.content = newitem[0].content;
      //this.items.push(obj);
      console.log(obj);
    })
  }

}
