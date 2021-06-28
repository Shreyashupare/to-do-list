
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsernameService {

  constructor() { }

  subject = new Subject<string>();

  getname(username:string){
    this.subject.next(username);
  }

  setname():Observable<string>{
    return this.subject.asObservable();
  }
}