import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-task-04',
  imports: [RouterLink],
  templateUrl: './independent-scroll.html',
  styleUrl: './independent-scroll.css',
})
export class IndependentScroll {
  protected readonly fillerItems = Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`);
}
