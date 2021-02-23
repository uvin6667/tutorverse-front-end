import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ContactComponent} from './contact/contact.component';
import {AllAdsComponent} from './all-ads/all-ads.component';
import {InstitutesComponent} from './institutes/institutes.component';
import {PostAdComponent} from './post-ad/post-ad.component';
import {TeachersComponent} from './teachers/teachers.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {TermsAndConditionsComponent} from './terms-and-conditions/terms-and-conditions.component';
import {PrivacyPolicyComponent} from './privacy-policy/privacy-policy.component';
import {HowItWorksComponent} from './how-it-works/how-it-works.component';
import {FaqComponent} from './faq/faq.component';

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
  },
  {
    component: AboutUsComponent,
    path: 'about-us',
  },
  {
    component: TermsAndConditionsComponent,
    path: 'terms-and-conditions',
  },
  {
    component: PrivacyPolicyComponent,
    path: 'privacy-policy',
  },
  {
    component: HowItWorksComponent,
    path: 'how-it-works',
  },
  {
    component: FaqComponent,
    path: 'faq',
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
