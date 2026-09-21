import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileUploadDropzone } from './file-upload-dropzone';

describe('FileUploadDropzone', () => {
  let component: FileUploadDropzone;
  let fixture: ComponentFixture<FileUploadDropzone>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FileUploadDropzone]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FileUploadDropzone);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
