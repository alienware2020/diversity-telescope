import { Component, OnInit } from '@angular/core';
import { faCalculator, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reward-recognition',
  templateUrl: './reward-recognition.component.html',
  styleUrls: ['./reward-recognition.component.scss']
})
export class RewardRecognitionComponent implements OnInit {
  showLoader: boolean = false;
  showResponse: boolean = false;
  faCalculator = faCalculator;
  faPaperPlane = faPaperPlane;
  totalScore: string;
  avgRating: string;
  initiativeScore: number;
  isEligibleForPromotion: boolean = false;
  technicalQ1: number = 0;
  technicalQ2: number = 0;
  technicalQ3: number = 0;
  technicalQ4: number = 0;
  leadershipQ1: number = 0;
  leadershipQ2: number = 0;
  leadershipQ3: number = 0;
  leadershipQ4: number = 0;
  businessQ1: number = 0;
  businessQ2: number = 0;
  businessQ3: number = 0;
  businessQ4: number = 0;
  form = new FormGroup({
    quarter: new FormControl('', Validators.required)
  });

  constructor() { }

  ngOnInit() {
  }

  calculate() {
    this.showLoader = true;
    setTimeout(() => {
      this.showResponse = true;
      this.showLoader = false;
      this.initiativeScore = 4.3;
      let avgTechnicalRating = this.technicalQ1 + this.technicalQ2 + this.technicalQ3 + this.technicalQ4;
      let avgLeadershipRating = this.leadershipQ1 + this.leadershipQ2 + this.leadershipQ3 + this.leadershipQ4;
      let avgBusinessRating = this.businessQ1 + this.businessQ2 + this.businessQ3 + this.businessQ4;
      let avgRating = ((avgTechnicalRating + avgLeadershipRating + avgBusinessRating) / 12);
      this.avgRating = avgRating.toFixed(1);
      this.totalScore = (avgRating * 0.8 + this.initiativeScore * 0.2).toFixed(1);
      this.isEligibleForPromotion = (avgRating * 0.8 + this.initiativeScore * 0.2) > 2.5;
    }, 1000);
  }
}
