import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private route: Router) {}

  /*loadContact(): void {
    this.route.navigateByUrl('/contact');
    console.log('dfgsfg');
  }

  loadHome(): void {
    this.route.navigateByUrl('/home');
  }

  loadAllAdds(): void {
    this.route.navigateByUrl('/all-ads');

  }

  loadTeachers(): void {
    this.route.navigateByUrl('/teachers');

  }

  loadInstitutes(): void {
    this.route.navigateByUrl('/institutes');

  }

  loadPostAd(): void {
    this.route.navigateByUrl('/post-ad');
  }

  loadAboutUs(): void {
    this.route.navigateByUrl('/about-us');
  }

  loadTermsAndConditions(): void {
    this.route.navigateByUrl('/terms-and-conditions');
  }

  loadPrivacyPolicy(): void {
    this.route.navigateByUrl('/privacy-policy');
  }

  loadHowItWorks(): void {
    this.route.navigateByUrl('/how-it-works');
  }

  loadFaq(): void {
    this.route.navigateByUrl('/faq');
  }*/
}
