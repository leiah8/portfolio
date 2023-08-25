import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  constructor() { 
    

  }

  ngOnInit(): void {

    var notSafari = document.getElementById("not-safari");
    var safari = document.getElementById("safari");

    if(navigator.userAgent.indexOf('Safari') != - 1 && navigator.userAgent.indexOf('Chrome') == -1) {
      //window.open("/assets/LeiahNayResume.pdf")
      //window.location.href = "assets/LeiahNayResume.pdf";

      safari.setAttribute("visibility", "visible");
      notSafari.setAttribute("visibility", "hidden");
    } else {
      safari.setAttribute("visibility", "hidden");
      notSafari.setAttribute("visibility", "visible");

    }


  }

}
