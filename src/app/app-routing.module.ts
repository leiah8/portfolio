import {ActivatedRoute} from "@angular/router";
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { MainComponent } from "./main/main.component";
import { ResumeComponent } from "./resume/resume.component";
import { ProjectsComponent } from "./projects/projects.component";
import { MinecartComponent } from "./minecart/minecart.component";


const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'projects/minecart', component: MinecartComponent },
  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
}


