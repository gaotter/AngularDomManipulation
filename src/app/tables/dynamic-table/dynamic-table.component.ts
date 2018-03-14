import {
  Component, OnInit, ViewChild, ViewContainerRef, AfterViewInit,
  ContentChildren, AfterContentInit, QueryList, ElementRef
} from '@angular/core';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.css']
})
export class DynamicTableComponent implements OnInit, AfterViewInit, AfterContentInit {



  @ViewChild('vc', { read: ViewContainerRef }) vc: ViewContainerRef;
  @ContentChildren("[td]") content: QueryList<ElementRef>;

  constructor() { }

  ngOnInit() {
  }



  ngAfterViewInit(): void {
    console.log('th', this.vc);
  }

  ngAfterContentInit(): void {
    console.log("content", this.content);
    this.content.forEach(c => console.log(c));
  }

}
