import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent implements OnInit {
  images: string[] = ['about-us-slider-1.jpg', 'about-us-slider-2-we-offer-welcoming-culture.jpg', 'about-us-slider-3-erfolgreiches-start-up-team-klatscht-hnde-ab.jpg'];
  currentImage: string = this.images[0];

  ngOnInit(): void {
    this.startSlider();
  }

  startSlider(): void {
    setInterval(() => {
      const currentIndex = this.images.indexOf(this.currentImage);
      const nextIndex = (currentIndex + 1) % this.images.length;
      this.currentImage = this.images[nextIndex];
    }, 5000);
  }
}
