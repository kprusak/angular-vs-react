import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-factory-test-item',
  templateUrl: './factory-test-item.component.html',
  styleUrls: ['./factory-test-item.component.css'],
  inputs: ['index', 'textContent', 'graphicContent', 'editTime', 'destroyTime']
})
export class FactoryTestItemComponent implements OnInit {

  textContent: any = '';
  graphicContent: any = '';
  index: any;

  startTime! : number
  initTime! : number
  contentInitTime! : number
  viewInitTime! : number
  onChangesTime! : number;
  onDestroyTime! : number;

  editTime! : number;
  destroyTime! : number;

  // Created
  constructor() {
    this.startTime = window.performance.now()
  }

  // Initialized by Angular
  ngOnInit() {
    this.initTime = window.performance.now()
  }

  // Rendered without children
  ngAfterContentInit() {
    this.contentInitTime = window.performance.now()
  }

  // Rendered with children
  ngAfterViewInit() {
    this.viewInitTime = window.performance.now();
    console.log(`(${ this.index+1 }) ngAfterViewInit: Component loading ${ this.viewInitTime - this.startTime }ms`);
  }

  ngOnChanges(){
    this.onChangesTime = window.performance.now()
    console.log(`(${ this.index+1 }) ngOnChanges: Component loading ${ this.onChangesTime - this.editTime }ms`);
  }

  ngOnDestroy(){
    this.onDestroyTime = window.performance.now()
    console.log(`(${ this.index+1 }) ngOnDestroy: Component loading ${ this.onDestroyTime - this.destroyTime - 3000 }ms`);
  }
}
