import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TeamComponent } from './team/team.component';
import { ForCompaniesComponent } from './for-companies/for-companies.component';
import { ForApplicantsComponent } from './for-applicants/for-applicants.component';
import { VacanciesComponent } from './vacancies/vacancies.component';
import { ContactComponent } from './contact/contact.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { FooterComponent } from './footer/footer.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProfileComponent,
    HomeComponent,
    AboutUsComponent,
    TeamComponent,
    ForCompaniesComponent,
    ForApplicantsComponent,
    VacanciesComponent,
    ContactComponent,
    JumbotronComponent,
    FooterComponent,
    ImageSliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
