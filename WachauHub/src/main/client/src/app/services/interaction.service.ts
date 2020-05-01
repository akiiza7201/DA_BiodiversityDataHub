import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  private groupSource = new Subject<string>() ;
  currentGroup = this.groupSource.asObservable();
  constructor() { }

  updateGroup(group: string) {
  this.groupSource.next(group);
  }

  getGroup() {
    return this.currentGroup;
  }
}
