import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalaryOptimizationComponent } from './salary-optimization.component';

describe('SalaryOptimizationComponent', () => {
  let component: SalaryOptimizationComponent;
  let fixture: ComponentFixture<SalaryOptimizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalaryOptimizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalaryOptimizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
