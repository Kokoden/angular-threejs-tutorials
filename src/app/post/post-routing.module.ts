import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostMainComponent } from './post-main/post-main.component';

const routes: Routes = [
  {
    path: '',
    component: PostMainComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostRoutingModule {}
