import { Component, OnInit , Input, AfterViewInit} from '@angular/core';
import { planetFactoryAPI, planetFactorySetup} from "./planet-factory";

@Component({
  selector: 'app-planet-factory',
  templateUrl: './planet-factory.component.html',
  styleUrls: ['./planet-factory.component.css']
})
export class PlanetFactoryComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {

    const setup = {
    } as planetFactorySetup

    const els = null; //this.renderEl.nativeElement; 
    const interactive = planetFactoryAPI(els, setup);

  }

}
