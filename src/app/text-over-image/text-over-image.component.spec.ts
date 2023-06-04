import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextOverImageComponent } from './text-over-image.component';

describe('TextOverImageComponent', () => {
  let component: TextOverImageComponent;
  let fixture: ComponentFixture<TextOverImageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextOverImageComponent]
    });
    fixture = TestBed.createComponent(TextOverImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
