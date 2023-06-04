import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-slider',
  templateUrl: './image-slider.component.html',
  styleUrls: ['./image-slider.component.scss']
})
export class ImageSliderComponent implements OnInit {
  images: { url: string, heading: string, paragraph: string }[] = [
    { url: 'about-us-slider-1.jpg', heading: 'Slider Heading 1', paragraph: 'Slider Paragraph 1' },
    { url: 'about-us-slider-2-we-offer-welcoming-culture.jpg', heading: 'Slider Heading 2', paragraph: 'Slider Paragraph 2' },
    { url: 'about-us-slider-3-erfolgreiches-start-up-team-klatscht-hnde-ab.jpg', heading: 'Slider Heading 3', paragraph: 'Slider Paragraph 3' }
  ];
  currentImage: { url: string, heading: string, paragraph: string } = this.images[0];

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


