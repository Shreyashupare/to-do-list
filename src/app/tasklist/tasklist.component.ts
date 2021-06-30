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
      this.items=newitem;
      //this.items.push(obj);
      console.log(this.items);
    })
  }
  removetask(removetitle:string){
    for(var i=0; i< this.items.length; i++){
      if(this.items[i].title == removetitle){
        this.items.splice(i,1);
        }
    }
  }
}
