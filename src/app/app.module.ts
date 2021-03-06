import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DynamicTableComponent } from './tables/dynamic-table/dynamic-table.component';
import { DynamicTableUngComponent } from './tables/dynamic-table-ung/dynamic-table-ung.component';
import { DynamicTableUngDirective } from './tables/dynamic-table-ung/dynamic-table-ung.directive';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    AppComponent,
    DynamicTableComponent,
    DynamicTableUngComponent,
    DynamicTableUngDirective
  ],
  imports: [
    BrowserModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
