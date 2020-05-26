import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/auth';
@Injectable()
export class AuthService {

    userData: any;

    constructor(private auth: AngularFireAuth, public router: Router) {
        this.setUserInLocalStorage();
    }

    private setUserInLocalStorage() {
        this.auth.authState.subscribe(user => {
            if (user) {
                this.userData = user;
                localStorage.setItem('user', JSON.stringify(this.userData));
                JSON.parse(localStorage.getItem('user'));
            } else {
                localStorage.setItem('user', null);
                JSON.parse(localStorage.getItem('user'));
            }
        });
    }

    get isLoggedIn(): boolean {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user) {
            let today = new Date().getTime();
            let lastLogin = new Date(+user.lastLoginAt).getTime();
            let diffSeconds = (today - lastLogin) / 1000;
            let diffMins = Math.round(diffSeconds / 60);

            if (diffMins > 120 || diffMins < 0) {
                localStorage.removeItem('user');
                return false;
            }

            return true;
        }
        return false;
    }

    /**
     * Efetua o cadastro e login do usuário
     * @param email Email do usuário a efetuar o login
     * @param password Senha do usuário a efetuar o login
     */
    async createUser(email: string, password: string) {
        let result = new Promise<any>((resolve, reject) => {
            this.auth.createUserWithEmailAndPassword(email, password)
                .then((result) => {
                    localStorage.removeItem('user');
                    this.userData = result.user;
                    localStorage.setItem('user', JSON.stringify(this.userData));
                    JSON.parse(localStorage.getItem('user'));
                    resolve(true);
                })
                .catch((error) => {
                    reject(error);
                })
        });
        return await result;
    }


    /**
     * Efetua o login do usuário
     * @param email Email do usuário a efetuar o login
     * @param password Senha do usuário a efetuar o login
     */
    async signIn(email: string, password: string) {
        let result = new Promise<any>((resolve, reject) => {
            this.auth.signInWithEmailAndPassword(email, password)
                .then((result) => {
                    this.userData = result.user;
                    localStorage.setItem('user', JSON.stringify(this.userData));
                    JSON.parse(localStorage.getItem('user'));
                    resolve(true);
                })
                .catch((error) => {
                    reject(error);
                });
        })
        return await result;
    }

    /**Efetua o logout do usuário */
    async signOut() {
        return await this.auth.signOut().then(() => {
            localStorage.removeItem('user');
            this.router.navigate(['sign-in']);
        })
    }
}