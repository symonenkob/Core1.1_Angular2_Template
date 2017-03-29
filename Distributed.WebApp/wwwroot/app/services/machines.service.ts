import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MachinesService {
    constructor(private http: Http) {
    }

    getMachines() {
        return this.http.get('/api/machine')
            .map(res => res.json());
    }

    getById(id: number) {
        return this.http.get('/api/machine/' + id)
            .map(res => res.json());
    }
}