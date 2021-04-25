import { Component, OnInit } from '@angular/core';
import { faCalculator } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-reward-recognition',
  templateUrl: './reward-recognition.component.html',
  styleUrls: ['./reward-recognition.component.scss']
})
export class RewardRecognitionComponent implements OnInit {
  faCalculator = faCalculator;
  technicalQ1: number;
  technicalQ2: number;
  technicalQ3: number;
  technicalQ4: number;
  leadershipQ1: number;
  leadershipQ2: number;
  leadershipQ3: number;
  leadershipQ4: number;
  businessQ1: number;
  businessQ2: number;
  businessQ3: number;
  businessQ4: number;

  constructor() { }

  ngOnInit() {
  }

}
