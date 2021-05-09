import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlowRootComponent } from './flow-root/flow-root.component';

const routes: Routes = [{
  path: "", component: FlowRootComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
