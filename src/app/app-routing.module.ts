import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EjemplohightchartComponent } from './ejemplohightchart/ejemplohightchart.component';


const routes: Routes = [{path: 'ejemplo', component: EjemplohightchartComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
