import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-jd-scoring',
  templateUrl: './jd-scoring.component.html',
  styleUrls: ['./jd-scoring.component.scss']
})
export class JdScoringComponent implements OnInit {
  @ViewChild('labelImport')
  labelImport: ElementRef;
  fileToUpload: File = null;
  recommendations: string[];
  faUpload = faUpload;
  showResponse: boolean = false;
  showLoader: boolean = false;

  constructor() { }

  ngOnInit() {
    this.recommendations = [
      "A JD should be limited to 850 words/2 pages.",
      "A JD should have more engaging words to hold the interest of applicants.",
      "A JD with softer words is more preferred by the applicants to feel more interesting about the job role.",
      "A JD should have key sections with detailed info avoiding any redundancy. Kindly refer attached document for more details."
    ];
  }

  onFileChange(files: FileList) {
    this.labelImport.nativeElement.innerText = Array.from(files)
      .map(f => f.name)
      .join(', ');
    this.fileToUpload = files.item(0);
  }

  onUpload() {
    this.showLoader = true;
    setTimeout(() => {
      this.showResponse = true;
      this.showLoader = false;
    }, 1000);
  }
}
