import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-table-ung',
  templateUrl: './dynamic-table-ung.component.html',
  styleUrls: ['./dynamic-table-ung.component.css']
})
export class DynamicTableUngComponent implements OnInit {

  cars: ICar[] = [];
  constructor() {

    this.cars.push({
      brand: 'volvo',
      color: 'red',
      vin: 'eee',
      year: 2000
    });
  }

  ngOnInit() {
  }

}


interface ICar {
  vin: string;
  year: number;
  brand: string;
  color: string;
}
