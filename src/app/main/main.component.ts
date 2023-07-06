import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { MainSetup, MainAPI } from "./main"

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements AfterViewInit {
  @ViewChild("header") public header?: ElementRef<HTMLElement>;
  @ViewChild("menu") public menu?: ElementRef<HTMLElement>;
  @ViewChild("menuExit") public menuExit?: ElementRef<HTMLElement>;
  @ViewChild("dropdown") public dropdown?: ElementRef<HTMLElement>;





  constructor() { }

  ngAfterViewInit(): void {
    const setup = {
      header : this.header?.nativeElement,
      dropdown : this.dropdown?.nativeElement,
      
      menu : this.menu?.nativeElement,
      menuExit : this.menuExit?.nativeElement,

    } as MainSetup

    var interactive = new MainAPI(setup)

    
  }

}
