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
      "Font style and line spacing across your resume is not consistent",
      "You may want to quantify your achievements for better credibility",
      "You may want to include some functional keywords for better ranking in recruiter searches.",
      "Font style and line spacing across your resume is not consistent"
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
