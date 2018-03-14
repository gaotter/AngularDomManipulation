import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicTableUngComponent } from './dynamic-table-ung.component';

describe('DynamicTableUngComponent', () => {
  let component: DynamicTableUngComponent;
  let fixture: ComponentFixture<DynamicTableUngComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicTableUngComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicTableUngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
