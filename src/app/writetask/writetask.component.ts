import { TaskslistService } from './../taskslist.service';
import { todo_item } from './../todoitem/todoitem';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-writetask',
  templateUrl: './writetask.component.html',
  styleUrls: ['./writetask.component.css']
})
export class WritetaskComponent implements OnInit {
  Title:string="Title";
  Description:string="Description";
  item:Array<todo_item> = [];
  
  constructor(private task:TaskslistService) { 
    
  }
  
  ngOnInit(): void {
  }
  createtask(){
    let obj= new todo_item();
    obj.title = this.Title;
    obj.content = this.Description;
    this.item.push(obj);
    this.task.gettask(this.item);
  }
}
