import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { MainSetup, MainAPI } from "./main"

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements AfterViewInit {
  @ViewChild("header") public header?: ElementRef<HTMLElement>;
  @ViewChild("dropdown") public dropdown?: ElementRef<HTMLElement>;
  @ViewChild("menu") public menu?: ElementRef<HTMLElement>;
  @ViewChild("menuExit") public menuExit?: ElementRef<HTMLElement>;

  @ViewChild("gitBtn") public gitBtn?: ElementRef<HTMLElement>;
  @ViewChild("resumeBtn1") public resumeBtn1?: ElementRef<HTMLElement>;
  @ViewChild("linkedInBtn1") public linkedInBtn1?: ElementRef<HTMLElement>;
  
  constructor() { }

  ngAfterViewInit(): void {
    const setup = {
      header : this.header?.nativeElement,
      dropdown : this.dropdown?.nativeElement,
      menu : this.menu?.nativeElement,
      menuExit : this.menuExit?.nativeElement,
      gitBtn : this.gitBtn?.nativeElement,
      resumeBtn1 : this.resumeBtn1?.nativeElement,
      linkedInBtn1 : this.linkedInBtn1?.nativeElement,
      

    } as MainSetup

    var interactive = new MainAPI(setup)

    
  }

}
