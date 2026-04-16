import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FallbackComponent } from './fallback/fallback.component';

const routes: Routes = [
  {
    path: '',
    component: FallbackComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FallbackRoutingModule { }
