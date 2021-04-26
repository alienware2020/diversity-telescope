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
  ratio: number;
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
  form = new FormGroup({
    quarter: new FormControl('', Validators.required)
  });
  
  constructor() { }

  ngOnInit() {
  }

  onUpload() {
    this.showLoader = true;
    setTimeout(() => {
      this.showResponse = true;
      this.showLoader = false;
      this.ratio = 4;
    }, 1000);
  }
}
