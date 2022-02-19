import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularComponent } from './angular/angular.component';
import { ThreejsComponent } from './threejs/threejs.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./homepage/homepage.module').then((m) => m.HomepageModule),
  },
  {
    path: 'posts',
    loadChildren: () => import('./post/post.module').then((m) => m.PostModule),
  },
  {
    path: 'angular',
    component: AngularComponent,
  },
  {
    path: 'threejs',
    component: ThreejsComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
