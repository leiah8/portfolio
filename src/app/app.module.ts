import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { StarterComponent } from './starter/starter.component';
import { MainComponent } from './main/main.component';
import { ResumeComponent } from './resume/resume.component';
import { MinecartComponent } from './minecart/minecart.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExperienceComponent } from './experience/experience.component';
import { MaterialBridgeComponent } from './material-bridge/material-bridge.component';
import { MoonsPlanetsComponent } from './moons-planets/moons-planets.component';
import { FlowersComponent } from './flowers/flowers.component';
import { PlanetFactoryComponent } from './planet-factory/planet-factory.component';
import { TradeBlocksComponent } from './trade-blocks/trade-blocks.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    StarterComponent,
    MainComponent,
    ResumeComponent,
    MinecartComponent,
    ProjectsComponent,
    ExperienceComponent,
    MaterialBridgeComponent,
    MoonsPlanetsComponent,
    FlowersComponent,
    PlanetFactoryComponent,
    TradeBlocksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
