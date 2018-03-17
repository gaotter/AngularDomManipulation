import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appDynamicTableUng]'
})
export class DynamicTableUngDirective implements AfterViewInit {

  tableElement: HTMLTableElement = null;
  parentDivElement: HTMLElement = null;

  private readonly parentDivClass = 'ui-table-wrapper';
  private readonly maxRuns = 100;
  private readonly hideCssClassName = 'hide';

  constructor(private elementRef: ElementRef) { }

  ngAfterViewInit(): void {

    this.retriveTableElement();
    this.retriveParentDivElement();
    this.handleResponsivenes();
  }


  private retriveTableElement() {
    this.tableElement = this.elementRef.nativeElement.getElementsByTagName('Table')[0];
  }


  private getTableChildByTagName(tagName: string) {
    if (this.tableElement === null) {
      this.retriveTableElement();
    }
    return this.tableElement.getElementsByTagName(tagName);
  }

  private handleResponsivenes() {
    let counter = 0;
    let tableWidth = this.tableElement.offsetWidth;
    const divWidth = this.parentDivElement.offsetWidth;
    this.resetHidden();

    while (tableWidth > divWidth && counter < this.maxRuns) {
      counter = counter + 1;
      this.hideLast();
      tableWidth = this.tableElement.offsetWidth;

    }

  }

  private resetHidden() {
    const allHidden = this.getAllHiddenTableCells();

    for (let i = 0; i < allHidden.length; i++) {
      allHidden.item(i).classList.remove(this.hideCssClassName);
    }
  }

  private hideLast() {
    const allHeaderCells = this.getVisibleHeaderCells();
    const allBodyCells = this.getVisibleBodyCells();

    this.hideLastInList(allHeaderCells);
    this.hideLastInList(allBodyCells);
  }

  private hideLastInList(allHeaderCells: NodeListOf<HTMLElement>) {
    const numberHeaderCells = allHeaderCells.length;
    allHeaderCells.item(numberHeaderCells - 1).classList.add(this.hideCssClassName);
  }

  private getAllHiddenTableCells(): NodeListOf<HTMLElement> {
    return this.tableElement.getElementsByClassName(this.hideCssClassName) as NodeListOf<HTMLElement>;
  }

  private getVisibleHeaderCells(): NodeListOf<HTMLTableHeaderCellElement> {
    return this.tableElement.querySelectorAll(`th:not(.${this.hideCssClassName})`) as NodeListOf<HTMLTableHeaderCellElement>;
  }

  private getVisibleBodyCells(): NodeListOf<HTMLTableCellElement> {
    return this.tableElement.querySelectorAll(`td:not(.${this.hideCssClassName})`) as NodeListOf<HTMLTableCellElement>;
  }

  private getTableHenderCells(): NodeListOf<HTMLTableHeaderCellElement> {
    return this.getTableChildByTagName('th') as NodeListOf<HTMLTableHeaderCellElement>;
  }

  private getTableBodyCells(): NodeListOf<HTMLTableCellElement> {
    return this.getTableChildByTagName('td') as NodeListOf<HTMLTableCellElement>
  }

  private retriveParentDivElement() {

    this.parentDivElement = (!!this.tableElement) ?
      this.tableElement.parentElement :
      this.elementRef.nativeElement.getElementsByClassName(this.parentDivClass);

  }

}
