import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-over-image',
  templateUrl: './text-over-image.component.html',
  styleUrls: ['./text-over-image.component.scss']
})
export class TextOverImageComponent {
  @Input() imageUrl!: string;
  @Input() altText!: string;
  @Input() heading!: string;
  @Input() description!: string;
}
