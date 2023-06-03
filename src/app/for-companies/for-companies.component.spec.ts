import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForCompaniesComponent } from './for-companies.component';

describe('ForCompaniesComponent', () => {
  let component: ForCompaniesComponent;
  let fixture: ComponentFixture<ForCompaniesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ForCompaniesComponent]
    });
    fixture = TestBed.createComponent(ForCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
