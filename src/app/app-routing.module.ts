import {ActivatedRoute} from "@angular/router";
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { MainComponent } from "./main/main.component";
import { ResumeComponent } from "./resume/resume.component";
import { ProjectsComponent } from "./projects/projects.component";
import { MinecartComponent } from "./minecart/minecart.component";
import { ExperienceComponent } from "./experience/experience.component";
import { MaterialBridgeComponent } from "./material-bridge/material-bridge.component";
import { MoonsPlanetsComponent } from "./moons-planets/moons-planets.component";
import { FlowersComponent } from "./flowers/flowers.component";
import { PlanetFactoryComponent } from "./planet-factory/planet-factory.component";
import { TradeBlocksComponent } from "./trade-blocks/trade-blocks.component";


const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'projects/minecart', component: MinecartComponent },
  { path: 'projects/materialbridge', component: MaterialBridgeComponent },
  { path: 'projects/moonsplanets', component: MoonsPlanetsComponent },
  { path: 'projects/flowers', component: FlowersComponent },
  { path: 'projects/planetfactory', component: PlanetFactoryComponent },
  { path: 'projects/tradeblocks', component: TradeBlocksComponent },
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}


