import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { faUpload, faPaperPlane, faMapMarker, faCaretDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-salary-optimization',
  templateUrl: './salary-optimization.component.html',
  styleUrls: ['./salary-optimization.component.scss']
})
export class SalaryOptimizationComponent implements OnInit {
  showLoader: boolean = false;
  showResponse: boolean = false;
  faPaperPlane = faPaperPlane;
  faMapMarker = faCaretDown;
  questions: any[];
  form = new FormGroup({
    quarter: new FormControl('', Validators.required)
  });

  constructor() {
    this.questions = [
      { title: 'Agility', id: 1 },
      { title: 'Curiosity & Progressiveness', id: 2 },
      { title: 'Teaming & Belonging', id: 3 },
      { title: 'Insightful & Inspiring', id: 4 },
      { title: 'Leadership', id: 5 },
      { title: 'Prior performance ratings or equivalent', id: 6 },
      { title: 'Prior Firm Background', id: 7 },
      { title: 'Fast tracker in prior organisation', id: 8 },
      { title: 'Time already spent at rank & grade / Role & designation', id: 9 },
      { title: 'Eligible / up for a promotion or progression in current firm cycle', id: 10 },
      { title: 'Relevant team Management / span of control', id: 11 },
      { title: 'Global Experience / travel', id: 12 },
      { title: 'Proactiveness', id: 13 },
      { title: 'Continuous Learning', id: 14 },
      { title: 'Connected & Innovative', id: 15 },
      { title: 'Technical Acumen', id: 16 },
      { title: 'Relevant projects worked on', id: 17 },
      { title: 'Candidate proficiency on Case study / Analysis / Content / Test if any', id: 18 },
    ];
  }

  ngOnInit() {
  }

  onUpload() {
    this.showLoader = true;
    setTimeout(() => {
      this.showResponse = true;
      this.showLoader = false;
    }, 1000);
  }
}
