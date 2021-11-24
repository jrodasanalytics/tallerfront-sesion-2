import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemplohightchartComponent } from './ejemplohightchart.component';

describe('EjemplohightchartComponent', () => {
  let component: EjemplohightchartComponent;
  let fixture: ComponentFixture<EjemplohightchartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjemplohightchartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjemplohightchartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
