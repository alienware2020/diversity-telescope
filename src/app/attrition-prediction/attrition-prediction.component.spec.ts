import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttritionPredictionComponent } from './attrition-prediction.component';

describe('AttritionPredictionComponent', () => {
  let component: AttritionPredictionComponent;
  let fixture: ComponentFixture<AttritionPredictionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttritionPredictionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttritionPredictionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
