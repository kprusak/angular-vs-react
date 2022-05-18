import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-factory-test-item',
  templateUrl: './factory-test-item.component.html',
  styleUrls: ['./factory-test-item.component.css'],
  inputs: ['componentData']
})
export class FactoryTestItemComponent implements OnInit {

  constructor() { }

  componentData: {textContent?: string, graphicContent?: string} = {};
  textContent: string = '';
  graphicContent: string = '';

  ngOnInit(): void {
    if(this.componentData.textContent) this.textContent = this.componentData.textContent;
    if(this.componentData.graphicContent) this.graphicContent = this.componentData.graphicContent;
  }

}
