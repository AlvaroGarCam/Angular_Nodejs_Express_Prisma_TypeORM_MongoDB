import { Component, OnInit } from '@angular/core';
import { Jobservice } from '../../core/services/job.service';
import { Job } from '../../core/models/job.model';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/core/models/category.model';
import { CategoryService } from 'src/app/core/services/category.service';
// import { Filters } from 'src/app/core/models/filters.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-list-jobs',
  templateUrl: './list-jobs.component.html',
  styleUrls: ['./list-jobs.component.css']
})

export class ListJobsComponent implements OnInit {

  //Declaracions
  routeFilters!: string | null;
  jobs: Job[] = [];
  slug_Category!: string | null;
  listCategories: Category[] = [];
  // filters = new Filters();
  offset: number = 0;
  limit: number = 3;
  totalPages: Array<number> = [];
  currentPage: number = 1;




  constructor(private jobservice: Jobservice,
    private ActivatedRoute: ActivatedRoute,
    private CategoryService: CategoryService,
    private Location: Location
  ) {
    // this.slug_Category = this.ActivatedRoute.snapshot.paramMap.get('filters');
  }

  //Lo que inicia
  ngOnInit(): void {
    console.log()
    this.slug_Category = this.ActivatedRoute.snapshot.paramMap.get('slug');
    this.routeFilters = this.ActivatedRoute.snapshot.paramMap.get('filters');
    // console.log(this.ActivatedRoute.snapshot.paramMap.get('filters'));



    this.getListForCategory();

    if (this.slug_Category !== null) {
      this.get_jobs_by_cat();
    }
    else if (this.routeFilters !== null) {
      this.refreshRouteFilter();
      // this.get_list_filtered(this.filters);
    } else {
      // console.log(window.location.href);
      // this.get_list_filtered(this.filters);
    }
  }

  //Agarrar jobes
  get_jobs_by_cat(): void {

    if (this.slug_Category !== null) {
      this.jobservice.getJobsByCategory(this.slug_Category).subscribe(
        (data: any) => {
          this.jobs = data.jobs;
          this.totalPages = Array.from(new Array(Math.ceil(data.job_count / this.limit)), (val, index) => index + 1);
          console.log(data.jobs);
        });
    }
  }

  // get_list_filtered(filters: Filters) {
  //   this.filters = filters;
  //   // console.log(JSON.stringify(this.filters));
  //   this.jobservice.get_jobs_filter(filters).subscribe(
  //     (data: any) => {
  //       this.jobs = data.jobs;
  //       this.totalPages = Array.from(new Array(Math.ceil(data.job_count / this.limit)), (val, index) => index + 1);
  //       console.log(this.jobs);
  //     });
  // }

  //Agarrar les categories pa els filtros
  getListForCategory() {
    this.CategoryService.all_categories_select().subscribe(
      (data: any) => {
        this.listCategories = data.categories;
      }
    );
  }


  refreshRouteFilter() {
    this.routeFilters = this.ActivatedRoute.snapshot.paramMap.get('filters');
    if (typeof (this.routeFilters) == "string") {
      // this.filters = JSON.parse(atob(this.routeFilters));
    } else {
      // this.filters = new Filters();
    }
  }

  // setPageTo(pageNumber: number) {

  //   this.currentPage = pageNumber;

  //   if (typeof this.routeFilters === 'string') {
  //     this.refreshRouteFilter();
  //   }

  //   if (this.limit) {
  //     // this.filters.limit = this.limit;
  //     // this.filters.offset = this.limit * (this.currentPage - 1);
  //   }

  //   this.Location.replaceState('/shop/' + btoa(JSON.stringify(this.filters)));
  //   // console.log(this.Location);
  //   this.get_list_filtered(this.filters);
  // }
}

