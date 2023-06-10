import { Component } from '@angular/core';

@Component({
  selector: 'app-for-companies',
  templateUrl: './for-companies.component.html',
  styleUrls: ['./for-companies.component.scss'],
})
export class ForCompaniesComponent {
  ReadMore: boolean = true;
  visible: boolean = false;
  onclick() {
    this.ReadMore = !this.ReadMore;
    this.visible = !this.visible;
  }
}
