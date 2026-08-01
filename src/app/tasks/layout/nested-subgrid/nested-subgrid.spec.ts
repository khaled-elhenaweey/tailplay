import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NestedSubgrid } from './nested-subgrid';

describe('NestedSubgrid', () => {
  let component: NestedSubgrid;
  let fixture: ComponentFixture<NestedSubgrid>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NestedSubgrid]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NestedSubgrid);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
