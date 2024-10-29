import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, ReplaySubject } from 'rxjs';
import { ApiService } from './api.service';
import { JwtService } from './jwt.service';
import { User } from '../models/user.model';
import { map, distinctUntilChanged } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private currentUserSubject = new BehaviorSubject<User>({} as User);
    public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());

    private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
    public isAuthenticated = this.isAuthenticatedSubject.asObservable();

    constructor(
        private apiService: ApiService,
        private jwtService: JwtService
    ) { }

    // Verify JWT in localstorage with server & load user's info.
    // This runs once on application startup.
    populate() {
        const token = this.jwtService.getToken();
        if (token) {
            this.apiService.get('/user', undefined, 3000).subscribe(
                (data) => {
                    return this.setAuth({ ...data.user, token });
                },
                (err) => {
                    // Si el refreshToken también caducó, purgar la autenticación
                    this.purgeAuth();
                }
            );
        } else {
            // Remove any potential remnants of previous auth states
            this.purgeAuth();
        }
    }

    setAuth(user: User) {
        // Save JWT sent from server in localstorage
        this.jwtService.saveToken(user.token);
        // Set current user data into observable
        this.currentUserSubject.next(user);
        // Set isAuthenticated to true
        this.isAuthenticatedSubject.next(true);
    }

    purgeAuth() {
        // Remove JWT from localstorage
        this.jwtService.destroyToken();
        // Set current user to an empty object
        this.currentUserSubject.next({} as User);
        // Set auth status to false
        this.isAuthenticatedSubject.next(false);
    }

    attemptAuth(type: string, credentials: any): Observable<User> {
        const route = (type === 'login') ? '/login' : '/register';
        return this.apiService.post(`/users${route}`, { user: credentials }, 3000)
            .pipe(map(
                (data: any) => {
                    if (type === 'login') {
                        // Solo en login llamamos a setAuth() porque recibimos un token
                        // console.log("attempAuth");
                        // console.log(data);
                        this.setAuth(data.user);
                    }
                    // Retornamos la respuesta del backend
                    return data;
                }
            ));
    }

    getCurrentUser(): User {
        return this.currentUserSubject.value;
    }

    // Update the user on the server (email, pass, etc)
    update(user: any): Observable<User> {
        return this.apiService.put('/user', { user }, 3000).pipe(map(
            (data: any) => {
                // Update the currentUser observable
                this.currentUserSubject.next(data.user);
                return data.user;
            }
        ));
    }

    // Logout the user
    logout(): Observable<void> {
        return this.apiService.post('/users/logout', {}, 3000).pipe(
            map(() => {
                this.purgeAuth();
            })
        );
    }

    // Get user profile
    getUserProfile(): Observable<User> {
        return this.apiService.get('/user/profile', undefined, 3000).pipe(
            map((data: any) => {
                // Update the currentUser observable with the profile data
                this.currentUserSubject.next(data.user);
                return data.user;
            })
        );
    }
}