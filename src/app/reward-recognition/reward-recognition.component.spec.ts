import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardRecognitionComponent } from './reward-recognition.component';

describe('RewardRecognitionComponent', () => {
  let component: RewardRecognitionComponent;
  let fixture: ComponentFixture<RewardRecognitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RewardRecognitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RewardRecognitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
