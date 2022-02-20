import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent implements OnInit {

  constructor() { }

  toDoItems: Array<string> = [];
  itemToAdd = new FormControl('');

  addItem() {
    this.toDoItems.push(this.itemToAdd.value)
    this.itemToAdd.setValue('');
  }

  removeItem(index: number) {
    this.toDoItems.splice(index,1)
  }

  ngOnInit(): void {
  }

}
