import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { faCalculator, faPaperPlane, faCheck, faCaretDown } from '@fortawesome/free-solid-svg-icons';

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
  faCheck = faCheck;
  faCalculator = faCalculator;
  questions: any[];
  grid: number = 1;
  range1: number;
  range2: number;
  marginLeft: number;
  markerMarginLeft: number;
  form = new FormGroup({
    expectedSalary: new FormControl('', Validators.required),
    panel11: new FormControl('', Validators.required),
    panel12: new FormControl('', Validators.required),
    panel13: new FormControl('', Validators.required),
    panel14: new FormControl('', Validators.required),
    panel15: new FormControl('', Validators.required),
    panel16: new FormControl('', Validators.required),
    panel17: new FormControl('', Validators.required),
    panel18: new FormControl('', Validators.required),
    panel19: new FormControl('', Validators.required),
    panel110: new FormControl('', Validators.required),
    panel111: new FormControl('', Validators.required),
    panel112: new FormControl('', Validators.required),
    panel113: new FormControl('', Validators.required),
    panel114: new FormControl('', Validators.required),
    panel115: new FormControl('', Validators.required),
    panel116: new FormControl('', Validators.required),
    panel117: new FormControl('', Validators.required),
    panel118: new FormControl('', Validators.required),
    panel21: new FormControl('', Validators.required),
    panel22: new FormControl('', Validators.required),
    panel23: new FormControl('', Validators.required),
    panel24: new FormControl('', Validators.required),
    panel25: new FormControl('', Validators.required),
    panel26: new FormControl('', Validators.required),
    panel27: new FormControl('', Validators.required),
    panel28: new FormControl('', Validators.required),
    panel29: new FormControl('', Validators.required),
    panel210: new FormControl('', Validators.required),
    panel211: new FormControl('', Validators.required),
    panel212: new FormControl('', Validators.required),
    panel213: new FormControl('', Validators.required),
    panel214: new FormControl('', Validators.required),
    panel215: new FormControl('', Validators.required),
    panel216: new FormControl('', Validators.required),
    panel217: new FormControl('', Validators.required),
    panel218: new FormControl('', Validators.required),
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

  onSubmit() {
    this.showLoader = true;
    setTimeout(() => {
      this.showResponse = true;
      this.showLoader = false;
      this.calculate();
      this.calculateMarkerPosition()
    }, 1000);
  }

  calculateMarkerPosition() {
    let expectedSalary = this.form.get('expectedSalary').value;
    if (expectedSalary && !isNaN(expectedSalary)) {
      let salary = parseFloat(expectedSalary);
      let perc = (salary - 30) / 6;
      this.markerMarginLeft = (360 * perc) - 5;
    }
  }

  calculate() {
    let panel1Value: number = 0;
    let panel1Count: number = 0;
    for (let i = 1; i <= 18; i++) {
      let panel1 = this.form.get('panel1' + i).value;
      if (panel1 && !isNaN(panel1)) {
        panel1Count++;
        panel1Value += parseInt(panel1);
      }
    }

    let panel2Value: number = 0;
    let panel2Count: number = 0;
    for (let i = 1; i <= 18; i++) {
      let panel2 = this.form.get('panel2' + i).value;
      if (panel2 && !isNaN(panel2)) {
        panel2Count++;
        panel2Value += parseInt(panel2);
      }
    }
    let totalScore = (panel1Value + panel2Value);
    let average = totalScore / (panel1Count + panel2Count);

    if (average >= 0 && average <= 1) {
      this.grid = 1;
      this.range1 = 30;
      this.range2 = 32;
      this.marginLeft = 0;
    }
    else if (average > 1 && average <= 2) {
      this.grid = 2;
      this.range1 = 32;
      this.range2 = 34;
      this.marginLeft = 120;
    }
    else if (average > 2 && average <= 3) {
      this.grid = 3;
      this.range1 = 34;
      this.range2 = 36;
      this.marginLeft = 240;
    }
    else {
      this.grid = 0;
      this.range1 = 0;
      this.range2 = 0;
      this.marginLeft = 0;
    }

    // if (totalScore >= 18 && totalScore < 30) {
    //   this.grid = 1;
    //   this.range1 = 30;
    //   this.range2 = 32;
    // }
    // else if (totalScore >= 30 && totalScore < 42) {
    //   this.grid = 2;
    //   this.range1 = 32;
    //   this.range2 = 34;
    // }
    // else if (totalScore >= 42 && totalScore <= 54) {
    //   this.grid = 3;
    //   this.range1 = 34;
    //   this.range2 = 36;
    // }
    // else {
    //   this.grid = 0;
    //   this.range1 = 0;
    //   this.range2 = 0;
    // }
  }

  onApprove() { }

  onCancel() { }
}
