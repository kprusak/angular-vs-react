import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-to-do-list-item',
  templateUrl: './to-do-list-item.component.html',
  styleUrls: ['./to-do-list-item.component.css'],
})
export class ToDoListItemComponent implements OnInit {

  constructor() { }

  @Input() item: string = '';
  
  ngOnInit(): void {
  }

}
