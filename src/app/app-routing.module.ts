import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {DatasetComponent} from './dataset/dataset.component';
import {WorkingComponent} from './working/working.component';
import {ResultComponent} from './result/result.component';
const routes: Routes = [
  { path: 'dataset', component: DatasetComponent },
  { path: 'working', component: WorkingComponent },
  { path: 'result', component: ResultComponent },
  {path: '', redirectTo: 'dataset', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
