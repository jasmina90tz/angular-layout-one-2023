import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextOverVideoComponent } from './text-over-video.component';

describe('TextOverVideoComponent', () => {
  let component: TextOverVideoComponent;
  let fixture: ComponentFixture<TextOverVideoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextOverVideoComponent]
    });
    fixture = TestBed.createComponent(TextOverVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
