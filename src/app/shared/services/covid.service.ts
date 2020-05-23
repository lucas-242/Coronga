import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

import { IState } from '../models/state';

const API = "https://covid19-brazil-api.now.sh/api/";

@Injectable()
export class CovidService {

    constructor(private http: HttpClient) { }

    /**Get all States */
    get() {
        return this.http.get<{data:[]}>(`${API}report/v1`).pipe(
            map(x => x.data as IState[])
        );
    }

    /**
     * Search by State
     * @param uf uf from State
     */
    getByState(uf: String) {
        return this.http.get<IState>(`${API}report/v1/brazil/uf/${uf}`);

    }

    loadMock() {
        return this.http.get<{data:[]}>(`/assets/mocks/state.json`).pipe(
            map(x => x.data as IState[])
        );
    }
}