import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
interface GalleryTile {
  id: number;
  rowSpan: string;
  color: string;
}
@Component({
  selector: 'app-task-05',
  imports: [RouterLink],
  templateUrl: './masonry-gallery.html',
  styleUrl: './masonry-gallery.css',
})
export class MasonryGallery {
  protected readonly tiles: GalleryTile[] = [
    { id: 1, rowSpan: 'row-span-1', color: 'bg-brand-300' },
    { id: 2, rowSpan: 'row-span-2', color: 'bg-neutral-300' },
    { id: 3, rowSpan: 'row-span-3', color: 'bg-brand-500' },
    { id: 4, rowSpan: 'row-span-2', color: 'bg-neutral-400' },
    { id: 5, rowSpan: 'row-span-3', color: 'bg-brand-400' },
    { id: 6, rowSpan: 'row-span-1', color: 'bg-neutral-300' },
    { id: 7, rowSpan: 'row-span-2', color: 'bg-brand-300' },
    { id: 8, rowSpan: 'row-span-3', color: 'bg-neutral-400' },
    { id: 9, rowSpan: 'row-span-1', color: 'bg-brand-500' },
    { id: 10, rowSpan: 'row-span-1', color: 'bg-brand-500' },
    { id: 11, rowSpan: 'row-span-1', color: 'bg-brand-500' },
    { id: 12, rowSpan: 'row-span-1', color: 'bg-brand-500' },
  ];
}
