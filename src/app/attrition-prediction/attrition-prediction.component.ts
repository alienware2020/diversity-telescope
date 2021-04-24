import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faUpload, faFileDownload } from '@fortawesome/free-solid-svg-icons';
import { ChartComponent } from "ng-apexcharts";
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-attrition-prediction',
  templateUrl: './attrition-prediction.component.html',
  styleUrls: ['./attrition-prediction.component.scss']
})
export class AttritionPredictionComponent implements OnInit {

  @ViewChild('labelImport')
  labelImport: ElementRef;
  fileToUpload: File = null;
  recommendations: string[];
  faUpload = faUpload;
  faFileDownload = faFileDownload;
  @ViewChild("chart") chart: ChartComponent;
  showCharts: boolean;
  mode: string;
  quarter: number;
  showLoader: boolean = false;
  public attritionPredictionChartOptions;
  public currentChartOptions;
  public attritionChartOptions;
  public postAttritionChartOptions;
  public genderChartOptions;
  public regionChartOptions;
  public backgroundChartOptions;
  form = new FormGroup({
    quarter: new FormControl('', Validators.required)
  });
  quarters: string[] = ['Next quarter', 'Next 2 quarters', 'Next 3 quarters', 'Next 4 quarters'];

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
      this.mode = 'gender';
      this.quarter = 1;
      this.loadCharts();
      this.showLoader = false;
    }, 1000);
  }

  loadCharts() {
    this.attritionPredictionChartOptions = {
      series: [{
        name: "attrition rate",
        data: [10, 41, 35, 20, 49, 12, 30, 1, 24]
      }],
      chart: {
        height: 230,
        type: "line",
        zoom: {
          enabled: false
        },
        toolbar: {
          show: false
        },
        dropShadow: {
          enabled: true,
          blur: 5,
          color: '#000',
          opacity: 0.1,
          top: 10,
          left: 2,
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width: 2.5
      },
      markers: {
        size: 4
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        labels: {
          style: {
            colors: "#A5A8AC"
          }
        }
      },
      yaxis: {
        labels: {
          style: {
            colors: "#A5A8AC"
          }
        }
      }
    }

    this.currentChartOptions = {
      chart: {
        height: 230,
        type: "donut"
      },
      legend: {
        position: 'bottom'
      },
      series: []
    };

    this.attritionChartOptions = {
      series: []
    };
    
    this.postAttritionChartOptions = {
      series: []
    };

    this.genderChartOptions = {
      labels: ["male", "female", "others"]
    };

    this.regionChartOptions = {
      labels: ["Delhi", "Karnataka", "Telangana"]
    };

    this.backgroundChartOptions = {
      labels: ["Hindu", "Muslim", "Sikh"]
    };

    this.UpdateCharts();
  }

  UpdateCharts(){
    let currentValue1 = Math.floor((Math.random() * 1500) + 1);
    let currentValue2 = Math.floor((Math.random() * 1500) + 1);
    let currentValue3 = Math.floor((Math.random() * 1500) + 1);

    let attritionValue1 = Math.floor((Math.random() * currentValue1) + 1);
    let attritionValue2 = Math.floor((Math.random() * currentValue2) + 1);
    let attritionValue3 = Math.floor((Math.random() * currentValue3) + 1);

    let postAttritionValue1 = currentValue1 - attritionValue1;
    let postAttritionValue2 = currentValue2 - attritionValue2;
    let postAttritionValue3 = currentValue3 - attritionValue3;

    this.currentChartOptions.series = [currentValue1, currentValue2, currentValue3];
    this.attritionChartOptions.series = [attritionValue1, attritionValue2, attritionValue3];
    this.postAttritionChartOptions.series = [postAttritionValue1, postAttritionValue2, postAttritionValue3];
  }

  getChartLabels() {
    switch (this.mode) {
      case 'gender':
        return this.genderChartOptions.labels;
      case 'region':
        return this.regionChartOptions.labels;
      case 'background':
        return this.backgroundChartOptions.labels;
      default:
        break;
    }
  }

  // updateChartOnQuarterUpdate() {
  //   let mode: number;
  //   switch (this.mode) {
  //     case 'gender':
  //       mode = 1;
  //       break;
  //     case 'region':
  //       mode = 2;
  //       break;
  //     case 'background':
  //       mode = 3;
  //       break;
  //     default:
  //       break;
  //   }
  //   this.genderChartOptions.series = [Math.floor((Math.random() * 10) + 1) * mode * this.quarter, Math.floor((Math.random() * 10) + 1) * mode * this.quarter, Math.floor((Math.random() * 10) + 1) * mode * this.quarter];
  //   this.regionChartOptions.series = [Math.floor((Math.random() * 10) + 1) * mode * this.quarter, Math.floor((Math.random() * 10) + 1) * mode * this.quarter, Math.floor((Math.random() * 10) + 1) * mode * this.quarter];
  //   this.backgroundChartOptions.series = [Math.floor((Math.random() * 10) + 1) * mode * this.quarter, Math.floor((Math.random() * 10) + 1) * mode * this.quarter, Math.floor((Math.random() * 10) + 1) * mode * this.quarter];
  // }

  changeQuarter(e) {
    let quarter = e.target.value;
    switch (quarter) {
      case '1st quarter':
        this.quarter = 1;
        break;
      case '2nd quarter':
        this.quarter = 2;
        break;
      case '3rd quarter':
        this.quarter = 3;
        break;
      case '4th quarter':
        this.quarter = 4;
        break;
      default:
        break;
    }
    this.UpdateCharts();
    // this.updateChartOnQuarterUpdate();
  }
}
