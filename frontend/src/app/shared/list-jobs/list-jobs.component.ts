import { Component, OnInit } from '@angular/core';
import { Jobservice } from '../../core/services/job.service';
import { Job } from '../../core/models/job.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/core/models/category.model';
import { CategoryService } from 'src/app/core/services/category.service';
import { Filters } from 'src/app/core/models/filters.model';
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
  slug_Category: string | null = null;
  listCategories: Category[] = [];
  filters = new Filters();
  offset: number = 0;
  limit: number = 3;
  totalPages: Array<number> = [];
  currentPage: number = 1;
  lastParams!: Filters;
  numItems?: number;
  totalJobs: number = 0;



  constructor(private jobservice: Jobservice,
    private ActivatedRoute: ActivatedRoute,
    private CategoryService: CategoryService,
    private Location: Location,
    private router: Router
  ) {
    this.slug_Category = this.ActivatedRoute.snapshot.paramMap.get('filters');
  }

  //Lo que inicia
  ngOnInit(): void {
    this.slug_Category = this.ActivatedRoute.snapshot.paramMap.get('slug');
    this.routeFilters = this.ActivatedRoute.snapshot.paramMap.get('filters');
    // console.log(this.ActivatedRoute.snapshot.paramMap.get('filters'));

    this.getListForCategory();

    if (this.slug_Category !== null) {
      this.get_jobs_by_cat();
    }
    else if (this.routeFilters !== null) {
      this.refreshRouteFilter();
      this.get_list_filtered(this.filters);
    } else {
      // console.log(window.location.href);
      this.get_list_filtered(this.filters);
    }
  }

  //COGER TODOS LOS JOBS

  get_all_jobs(): void {
    this.jobservice.get_jobs().subscribe(
      (data: Job[]) => {
        console.log(data); // Verifica la estructura de la respuesta aquí
        this.jobs = data;
        console.log(this.jobs);
      },
      (error) => {
        console.error('Error al obtener los trabajos:', error);
      }
    );
  }

  get_jobs_by_cat(): void {
    if (this.slug_Category !== null) {
      this.jobservice.getJobsByCategorySlug(this.slug_Category).subscribe(
        (data: any) => {
          console.log(data); // Verifica la estructura de la respuesta aquí
          if (data && data.jobs) {
            this.jobs = data.jobs;
            console.log(this.jobs);
          } else {
            console.error('La respuesta no contiene la propiedad jobs:', data);
          }
        },
        (error) => {
          console.error('Error al obtener los trabajos:', error);
        }
      );
    }
  }

  get_list_filtered(filters: any) {
    this.filters = filters;
    this.jobservice.get_jobs_filter(filters).subscribe(
      (data: any) => {
        console.log('API response:', data); // Verifica la respuesta completa de la API
        if (data && data.jobs && data.Job_count !== undefined && data.Job_count !== null) {
          this.jobs = data.jobs;
          this.totalJobs = data.Job_count; // Actualiza el valor de totalJobs
          const totalPagesCount = Math.ceil(data.Job_count / this.limit);
          this.totalPages = Array.from(new Array(totalPagesCount), (val, index) => index + 1);
          // console.log(this.jobs);
        } else {
          console.error('La respuesta no contiene la propiedad jobs o Job_count:', data);
        }
      },
      (error) => {
        console.error('Error al obtener los trabajos:', error);
      }
    );
  }

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
      this.filters = JSON.parse(atob(this.routeFilters));
    } else {
      this.filters = new Filters();
    }
  }

  testPagination(data: any) {
    let params: any = {};
    if (this.lastParams) {
      params = this.lastParams;
    }
    params['limit'] = data.limit;
    params['offset'] = data.offset;
    this.get_list_filtered(params);
  }

  setPageTo(pageNumber: number) {

    this.currentPage = pageNumber;

    if (typeof this.routeFilters === 'string') {
      this.refreshRouteFilter();
    }

    if (this.limit) {
      this.filters.limit = this.limit;
      this.filters.offset = this.limit * (this.currentPage - 1);
    }

    this.Location.replaceState('/shop/' + btoa(JSON.stringify(this.filters)));
    // console.log(this.Location);
    this.get_list_filtered(this.filters);
  }
}

