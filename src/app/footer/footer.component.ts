import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  @Input() title: string = '';
  backgroundImageUrl =
    'assets/images/footer-people-on-street-zoomed-in-quicksilver.jpg';
}
