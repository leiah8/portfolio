import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Game, MoonsPlanetsAPI} from "./moons-planets";
import {ActivatedRoute} from "@angular/router";


@Component({
  selector: 'app-moons-planets',
  templateUrl: './moons-planets.component.html',
  styleUrls: ['./moons-planets.component.css']
})
export class MoonsPlanetsComponent implements AfterViewInit {
  @ViewChild("arena") public arena?: ElementRef<HTMLElement>;
  @ViewChild("controls") public controls?: ElementRef<HTMLElement>;

  groups : boolean

  constructor(private route: ActivatedRoute) {
    var p;
    this.route.params.subscribe( params => p = params);

    this.groups = (p.groups == "ones") ? false : true
  }

  ngAfterViewInit(): void {
    const setup = {
      arena : this.arena.nativeElement,
      controls : this.controls.nativeElement,
      groups : this.groups
    }

    const game1 = {
      p1Num : 8,
      p2Num : 2,
      p1Moons : 10,
      p2Moons : 5,
      attempts: 0, //must be initialized to 0
    } as Game

    const game2 = {
      p1Num : 4,
      p2Num : 3,
      p1Moons : 4,
      p2Moons : 3,
      attempts: 0, //must be initialized to 0
    } as Game

    //max 10 moons per planet
    //max 10 planets total

    // window.onload = function() {
    //   if (( window.innerWidth / window.innerHeight < 0.9 ) ) {
    //     //change template url to global one 
    //   }
    //   else {
    //     console.log("not ")
    //     var interactive = new MoonsPlanetsAPI(setup, [game1, game2])
    //   }
    // }

    // window.onresize = function() {
    //   if (( window.innerWidth / window.innerHeight < 0.9) ) {
    //     //change template url to global one 
    //   }
    //   else {
    //     var interactive = new MoonsPlanetsAPI(setup, [game1, game2])
    //   }
    // }

    var interactive = new MoonsPlanetsAPI(setup, [game1, game2])
      
        
    }
  

}
