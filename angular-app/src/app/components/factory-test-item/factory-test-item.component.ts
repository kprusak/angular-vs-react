import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-factory-test-item',
  templateUrl: './factory-test-item.component.html',
  styleUrls: ['./factory-test-item.component.css'],
  inputs: ['componentData', 'index', 'textContent', 'graphicContent']
})
export class FactoryTestItemComponent implements OnInit {

  textContent: any = '';
  graphicContent: any = '';
  index: any;

  startTime! : number
  initTime! : number
  contentInitTime! : number
  viewInitTime! : number
  
  printTime(time : number, moment: string) {
    //console.log(`(${ this.index+1 }) ${ moment }: Global loading ${ time }ms`)
    //console.log(`${ moment }: Global loading ${ time / 1000 }s`)
    console.log(`(${ this.index+1 }) ${ moment }: Component loading ${ time - this.startTime }ms`)
    //console.log(`${ moment }: Component loading ${ (time - this.startTime) / 1000 }s`)
  }

  // Created
  constructor() {
    this.startTime = window.performance.now()
    //this.printTime(this.startTime, 'constructor')
  }

  // Initialized by Angular
  ngOnInit() {
    this.initTime = window.performance.now()
    //this.printTime(this.initTime, 'onInit')
  }

  // Rendered without children
  ngAfterContentInit() {
    this.contentInitTime = window.performance.now()
    //this.printTime(this.contentInitTime, 'afterContentInit')
  }

  // Rendered with children
  ngAfterViewInit() {
    this.viewInitTime = window.performance.now()
    this.printTime(this.viewInitTime, 'afterViewInit')
  }

  ngOnChanges(){
    this.viewInitTime = window.performance.now()
    this.printTime(this.viewInitTime, 'onChanges')
  }

  ngOnDestroy(){
    this.viewInitTime = window.performance.now()
    this.printTime(this.viewInitTime, 'onDestroy')
  }
}
