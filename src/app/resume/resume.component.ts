import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements AfterViewInit {

  constructor() { 

    if(navigator.userAgent.indexOf('Safari') != - 1 && navigator.userAgent.indexOf('Chrome') == -1) {
      //window.open("/assets/LeiahNayResume.pdf")
      window.location.href = "assets/LeiahNayResume.pdf";
    }

  }

  ngAfterViewInit(): void {
  }

}
