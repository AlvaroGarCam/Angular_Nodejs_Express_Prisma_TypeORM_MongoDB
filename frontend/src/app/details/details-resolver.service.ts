import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Jobservice } from '../core/services/job.service';
import { Job } from '../core/models/job.model';

@Injectable({
    providedIn: 'root'
})
export class DetailsResolver implements Resolve<Job | null> {
    constructor(private jobService: Jobservice, private router: Router) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<Job | null> {
        return this.jobService.get_job(route.params['slug']).pipe(
            catchError((err) => {
                console.error('Error al obtener el trabajo:', err);
                this.router.navigateByUrl('/');
                return of(null);
            })
        );
    }
}