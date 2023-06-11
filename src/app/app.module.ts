import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ForCompaniesComponent } from './for-companies/for-companies.component';
import { ForApplicantsComponent } from './for-applicants/for-applicants.component';
import { VacanciesComponent } from './vacancies/vacancies.component';
import { ContactComponent } from './contact/contact.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { FooterComponent } from './footer/footer.component';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { TextOverImageComponent } from './text-over-image/text-over-image.component';
import { ServicesComponent } from './services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProfileComponent,
    HomeComponent,
    AboutUsComponent,
    ForCompaniesComponent,
    ForApplicantsComponent,
    VacanciesComponent,
    ContactComponent,
    JumbotronComponent,
    FooterComponent,
    ImageSliderComponent,
    TextOverImageComponent,
    ServicesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, FlexLayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
