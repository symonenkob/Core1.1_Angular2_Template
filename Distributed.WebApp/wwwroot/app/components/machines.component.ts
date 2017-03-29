import { Component } from '@angular/core';
import { MachinesService } from '../services/machines.service';

@Component({
    selector: 'my-machines',
    templateUrl: '/components/machinesComponent',
    //templateUrl: '/components/indexComponent',
    //template: ``,
    providers: [MachinesService]
})
export class MachinesComponent {
    machines: IMachine[];

    constructor(private machinesService: MachinesService) {
        this.machinesService.getMachines().subscribe(t => {
            this.machines = t;
        });
    }
}

interface IMachine {
    id: number;
    name: string;
    lastping: Date;
}