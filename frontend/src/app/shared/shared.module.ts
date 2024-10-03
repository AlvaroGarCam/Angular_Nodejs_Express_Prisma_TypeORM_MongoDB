import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
//SEARCH
import { SearchComponent } from '../shared/search/search.component';

//PAGINATION
import { PaginationComponent } from './pagination/pagination.component';

import { ShowAuthedDirective } from './show-authed.directive';
// //CATEGORIAS
import { ListCategoriesComponent } from '../shared/list-categories/list-categories.component';
import { CardCategoryComponent } from '../shared/card-category/card-category.component';

// //JOBS
import { ListJobsComponent } from './list-jobs/list-jobs.component';
import { CardJobComponent } from './card-job/card-job.component';
//Carousel
import { CarouselItemsComponent } from './carousel-items/carousel-items.component';
import { CarouselComponent } from './carousel/carousel.component';

import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { FiltersComponent } from './filters/filters.component';
// import { FavoriteButtonComponent } from './buttons/favorite-button.component';
// import { FollowButtonComponent } from './buttons/follow-button.component';
// import { CommentsComponent } from './comments/comments.component';
// import { ListJobsOnProfileComponent } from './list-jobs-on-profile/list-jobs-on-profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
// import { FollowListComponent } from './follow-list/follow-list.component';

@NgModule({
     imports: [
          CommonModule,
          FormsModule,
          ReactiveFormsModule,
          HttpClientModule,
          RouterModule,
          NgbModule,
          InfiniteScrollModule,
     ],
     declarations: [
          ListCategoriesComponent,
          CardCategoryComponent,
          ListJobsComponent,
          CardJobComponent,
          CarouselItemsComponent,
          CarouselComponent,
          FiltersComponent,
          SearchComponent,
          ShowAuthedDirective,
          // FavoriteButtonComponent,
          // FollowButtonComponent,
          // CommentsComponent,
          // ListJobsOnProfileComponent,
          // FollowListComponent
          PaginationComponent
     ],
     exports: [
          ListCategoriesComponent,
          ListJobsComponent,
          FormsModule,
          ReactiveFormsModule,
          CardJobComponent,
          CardCategoryComponent,
          CarouselItemsComponent,
          CarouselComponent,
          FiltersComponent,
          SearchComponent,
          ShowAuthedDirective,
          // FavoriteButtonComponent,
          // FollowButtonComponent,
          // CommentsComponent,
          // ListJobsOnProfileComponent,
          // FollowListComponent
          PaginationComponent
     ],
})

export class SharedModule { }