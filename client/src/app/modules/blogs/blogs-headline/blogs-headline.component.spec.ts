import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogsHeadlineComponent } from './blogs-headline.component';

describe('BlogsHeadlineComponent', () => {
  let component: BlogsHeadlineComponent;
  let fixture: ComponentFixture<BlogsHeadlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogsHeadlineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogsHeadlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
