import { ViewChild, ElementRef, AfterViewInit, Component } from '@angular/core';
import { gsap } from "gsap";

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements AfterViewInit {
  @ViewChild("dropdown") public dropdownGet: ElementRef<HTMLElement>;
  @ViewChild("menu") public menuGet: ElementRef<HTMLElement>;
  @ViewChild("menuExit") public menuExitGet: ElementRef<HTMLElement>;
  
  dropdown : HTMLElement;
  menuBtn : HTMLElement;
  menuExit : HTMLElement;


  constructor() { 
    this.dropdown = this.dropdownGet.nativeElement;
    this.menuBtn = this.menuGet.nativeElement;
    this.menuExit = this.menuExitGet.nativeElement;
      

  }

  ngAfterViewInit(): void {

    this.setupButtons()

  }

  setupButtons() {
    var self = this

    gsap.set(self.dropdown, {visibility : "hidden"})
    this.menuBtn.onpointerdown = function() {
        gsap.set(self.dropdown, {visibility : "visible"})
    }

    this.menuExit.onpointerdown = function() {
        gsap.set(self.dropdown, {visibility : "hidden"})
    }

    //to do : add buttons for menu list items
    
}

}
