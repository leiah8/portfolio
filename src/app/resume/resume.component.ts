import { Component, OnInit, AfterViewInit } from '@angular/core';
import { gsap } from "gsap/all";

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

      gsap.set(notSafari, {display : "none"});
    } else {
      
      gsap.set(safari, {display : "none"});

    }


  }

}
