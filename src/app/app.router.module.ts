import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ContactComponent} from './contact/contact.component';
import {AllAdsComponent} from './all-ads/all-ads.component';
import {InstitutesComponent} from './institutes/institutes.component';
import {PostAdComponent} from './post-ad/post-ad.component';
import {TeachersComponent} from './teachers/teachers.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    component: DashboardComponent,
    path: 'home',
  },
  {
    component: AllAdsComponent,
    path: 'all-ads',
  },
  {
    component: ContactComponent,
    path: 'contact',
  },
  {
    component: InstitutesComponent,
    path: 'institutes',
  },
  {
    component: PostAdComponent,
    path: 'post-ad',
  },
  {
    component: TeachersComponent,
    path: 'teachers',
  }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRouterModule { }
