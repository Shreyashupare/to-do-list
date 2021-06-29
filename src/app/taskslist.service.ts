import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { todo_item } from './todoitem/todoitem';
@Injectable({
  providedIn: 'root'
})
export class TaskslistService {
  
  subject = new Subject<todo_item[]>();
  constructor() { }
  gettask(item:todo_item[]){
    this.subject.next(item);
  }
  givetask():Observable<todo_item[]>{
    return this.subject.asObservable();
  }
}
