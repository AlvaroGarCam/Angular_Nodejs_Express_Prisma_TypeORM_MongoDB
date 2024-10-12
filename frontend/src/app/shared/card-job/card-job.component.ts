import { Component, OnInit, Input } from '@angular/core';
import { Job } from '../../core/models/job.model';

@Component({
  selector: 'app-card-job',
  templateUrl: './card-job.component.html',
  styleUrls: ['./card-job.component.css']
})

export class CardJobComponent implements OnInit {

  @Input() jobs: Job = {} as Job;

  constructor() { }

  ngOnInit(): void {

  }

  onToggleFavorite(favorited: boolean) {
    this.jobs.favorited = favorited;

    if (favorited) {
      this.jobs.favoritesCount++;
    } else {
      this.jobs.favoritesCount--;
    }
  }

}