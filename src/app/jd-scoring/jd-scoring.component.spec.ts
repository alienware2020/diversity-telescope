import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JdScoringComponent } from './jd-scoring.component';

describe('JdScoringComponent', () => {
  let component: JdScoringComponent;
  let fixture: ComponentFixture<JdScoringComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JdScoringComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JdScoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
