import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { MainSetup, MainAPI } from "./main"

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements AfterViewInit {
  @ViewChild("dropdown") public dropdown?: ElementRef<HTMLElement>;
  @ViewChild("menu") public menu?: ElementRef<HTMLElement>;
  @ViewChild("menuExit") public menuExit?: ElementRef<HTMLElement>;

  // @ViewChild("emailBtn") public emailBtn?: ElementRef<HTMLElement>;
  
  @ViewChild("jobBtn1") public jobBtn1?: ElementRef<HTMLElement>;
  @ViewChild("jobBtn2") public jobBtn2?: ElementRef<HTMLElement>;
  @ViewChild("jobBtn3") public jobBtn3?: ElementRef<HTMLElement>;
  @ViewChild("jobTitle") public jobTitle?: ElementRef<HTMLElement>;
  @ViewChild("jobP") public jobP?: ElementRef<HTMLElement>;
  @ViewChild("jobDate") public jobDate?: ElementRef<HTMLElement>;
  
  constructor() { }

  ngAfterViewInit(): void {
    const setup = {
      dropdown : this.dropdown?.nativeElement,
      menu : this.menu?.nativeElement,
      menuExit : this.menuExit?.nativeElement,

      // emailBtn : this.emailBtn.nativeElement,
      jobBtn1 : this.jobBtn1.nativeElement,
      jobBtn2 : this.jobBtn2.nativeElement,
      jobBtn3 : this.jobBtn3.nativeElement,

      jobTitle : this.jobTitle.nativeElement,
      jobP : this.jobP.nativeElement,
      jobDate : this.jobDate.nativeElement,

    } as MainSetup

    var interactive = new MainAPI(setup)

    
  }

}
