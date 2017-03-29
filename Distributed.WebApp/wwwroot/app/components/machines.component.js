"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var machines_service_1 = require("../services/machines.service");
var MachinesComponent = (function () {
    function MachinesComponent(machinesService) {
        var _this = this;
        this.machinesService = machinesService;
        this.machinesService.getMachines().subscribe(function (t) {
            _this.machines = t;
        });
    }
    return MachinesComponent;
}());
MachinesComponent = __decorate([
    core_1.Component({
        selector: 'my-machines',
        templateUrl: '/components/machinesComponent',
        //templateUrl: '/components/indexComponent',
        //template: ``,
        providers: [machines_service_1.MachinesService]
    }),
    __metadata("design:paramtypes", [machines_service_1.MachinesService])
], MachinesComponent);
exports.MachinesComponent = MachinesComponent;
//# sourceMappingURL=machines.component.js.map