import { Component, OnInit } from '@angular/core';
import { Job } from '../core/models/job.model';
import { Jobservice } from '../core/services/job.service';
import { ActivatedRoute, Router } from '@angular/router';
// import { CarouselDetails } from '../core/models/carousel.model';
@Component({
    selector: 'app-details',
    templateUrl: './details.component.html',
    styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

    job: Job | null = null;
    slug: string | null = null;
    // @Input() page!: CarouselDetails[];

    constructor(
        private route: ActivatedRoute,
        private jobService: Jobservice,
        private router: Router,
    ) { }

    ngOnInit(): void {
        this.route.data.subscribe(
            (data: any) => {
                // console.log('Datos recibidos del resolver:', data); // Log adicional
                if (data && data.job) {
                    this.slug = data.job.slug;
                    this.job = data.job;
                } else {
                    console.log('No se encontraron datos del trabajo');
                    this.router.navigate(['/']);
                }
            },
            (error) => {
                console.error('Error al obtener los detalles del trabajo:', error);
                this.router.navigate(['/']);
            }
        );
    }

    get_job() {
        if (typeof this.slug === 'string') {
            this.jobService.get_job(this.slug).subscribe(
                (data: any) => {
                    this.job = data;
                    console.log('Trabajo recibido:', this.job);
                },
                (error) => {
                    console.error('Error al obtener el trabajo:', error);
                    this.router.navigate(['/']);
                }
            );
        } else {
            console.log('Fallo al encontrar el job');
            this.router.navigate(['/']);
        }
    }
}