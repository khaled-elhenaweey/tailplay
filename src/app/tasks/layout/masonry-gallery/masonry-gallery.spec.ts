import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasonryGallery } from './masonry-gallery';

describe('MasonryGallery', () => {
  let component: MasonryGallery;
  let fixture: ComponentFixture<MasonryGallery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasonryGallery]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasonryGallery);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
