import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageMainComponent } from './homepage-main/homepage-main.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageMainComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomepageRoutingModule {}
