import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faUpload, faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { ChartComponent } from "ng-apexcharts";

@Component({
  selector: 'app-resume-screening',
  templateUrl: './resume-screening.component.html',
  styleUrls: ['./resume-screening.component.scss']
})
export class ResumeScreeningComponent implements OnInit {
  @ViewChild('labelImport')
  labelImport: ElementRef;
  fileToUpload: File = null;
  recommendations: string[];
  faUpload = faUpload;
  faFileDownload = faFileDownload;
  @ViewChild("chart") chart: ChartComponent;
  showCharts: boolean;
  public chartOptions;
  public genderChartOptions;
  public regionChartOptions;
  public backgroundChartOptions;
  showLoader: boolean = false;

  constructor() {
    this.showCharts = false;
  }

  ngOnInit() {
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
      this.showCharts = true;
      this.loadCharts();
      this.showLoader = false;
    }, 1000);
  }

  loadCharts() {
    this.chartOptions = {
      chart: {
        height: 230,
        type: "donut"
      },
      legend: {
        position: 'bottom'
      },
    };

    this.genderChartOptions = {
      series: [34, 20, 2],
      labels: ["male", "female", "others"]
    };

    this.regionChartOptions = {
      series: [24, 10, 14],
      labels: ["Delhi", "Karnataka", "Telangana"]
    };

    this.backgroundChartOptions = {
      series: [14, 15, 10],
      labels: ["IT industry", "Army veterans", "PSUs"]
    };
  }
}
