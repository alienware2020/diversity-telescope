import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HiringMixComponent } from './hiring-mix.component';

describe('HiringMixComponent', () => {
  let component: HiringMixComponent;
  let fixture: ComponentFixture<HiringMixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiringMixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiringMixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
