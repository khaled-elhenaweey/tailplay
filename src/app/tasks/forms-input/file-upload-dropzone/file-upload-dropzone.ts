import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

type DropzoneState = 'idle' | 'dragging' | 'error';
@Component({
  selector: 'app-task-23',
  imports: [RouterLink],
  templateUrl: './file-upload-dropzone.html',
  styleUrl: './file-upload-dropzone.css',
})
export class FileUploadDropzone {
  protected readonly state = signal<DropzoneState>('idle');

  protected onDragEnter(event: DragEvent): void {
    event.preventDefault();
    this.state.set('dragging');
  }
  protected onDragLeave(event: DragEvent): void {
    event.preventDefault();
    this.state.set('idle');
  }
  protected onDragOver(event: DragEvent): void {
    event.preventDefault();
  }
  protected onDrop(event: DragEvent): void {
    event.preventDefault();
    const file = event.dataTransfer?.files?.[0];

    if (file && !file.type.startsWith('image/')) {
      this.state.set('error');
      return;
    }
    this.state.set('idle');
  }
}
