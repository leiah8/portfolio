// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-flowers',
//   templateUrl: './flowers.component.html',
//   styleUrls: ['./flowers.component.css']
// })
// export class FlowersComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { ManyFlowersAPI, GameInput } from './flowers2';

@Component({
  selector: 'app-flowers',
    templateUrl: './flowers.component.html',
    styleUrls: ['./flowers.component.css']
})
export class FlowersComponent implements AfterViewInit {
  @ViewChild("arena") public arena?: ElementRef<HTMLElement>;
  @ViewChild("input") public input?: ElementRef<HTMLElement>;
  @ViewChild("playBtn") public playBtn?: ElementRef<HTMLElement>;
  @ViewChild("retryBtn") public retryBtn?: ElementRef<HTMLElement>;
  @ViewChild("nextBtn") public nextBtn?: ElementRef<HTMLElement>;
  @ViewChild("anim") public anim?: ElementRef<HTMLElement>;
  @ViewChild("rectangles") public rectangles?: ElementRef<HTMLElement>;
  // @ViewChild("retryBtn") public retryBtn?: ElementRef<HTMLElement>;
  // @ViewChild("playBtn") public playBtn?: ElementRef<HTMLElement>;
  // @ViewChild("nextBtn") public nextBtn?: ElementRef<HTMLElement>;

  constructor() { }

  ngAfterViewInit(): void {

    const setup = {
      arena : this.arena.nativeElement,
      input : this.input.nativeElement,
      playBtn : this.playBtn.nativeElement,
      retryBtn : this.retryBtn.nativeElement,
      nextBtn : this.nextBtn.nativeElement,
      anim : this.anim.nativeElement,
      rectangles : this.rectangles.nativeElement,
      
      columns : 10,
      rows : 10

    }

    // const config = {
    // }

    const g0 = {
      goal : [0, 7, 0, 0],
      targets : 8,
      mode : "rows",
      horizontalDiv : true,
      verticalDiv : true,

    } as GameInput

    const g2 = {
      goal : [0, 4, 0, 0],
      targets : 5,
      mode : "rows",
      horizontalDiv : false,
      verticalDiv : false,

    } as GameInput

    const g1 = {
      goal : [0, 6, 0, 0],
      targets : 2,
      mode : "rows",
      horizontalDiv : false,
      verticalDiv : false,

    } as GameInput

    const interactive = new ManyFlowersAPI(setup, [g0, g1, g2])
  }

}

