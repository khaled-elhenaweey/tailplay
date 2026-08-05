import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DenseAdminTable } from './dense-admin-table';

describe('DenseAdminTable', () => {
  let component: DenseAdminTable;
  let fixture: ComponentFixture<DenseAdminTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DenseAdminTable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DenseAdminTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
