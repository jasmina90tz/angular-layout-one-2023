import { Component, Input } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-jumbotron',
  templateUrl: './jumbotron.component.html',
  styleUrls: ['./jumbotron.component.scss'],
})
export class JumbotronComponent {
  @Input() title: string = '';
  gifUrl: SafeResourceUrl;
  constructor(private sanitizer: DomSanitizer) {
    const path = 'assets/images/gif.gif';
    this.gifUrl = this.sanitizer.bypassSecurityTrustResourceUrl(path);
  }
}
