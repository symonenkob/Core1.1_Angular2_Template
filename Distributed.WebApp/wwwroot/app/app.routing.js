"use strict";
var router_1 = require("@angular/router");
var index_component_1 = require("./components/index.component");
var machines_component_1 = require("./components/machines.component");
var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: index_component_1.IndexComponent, data: { title: 'Home' } },
    { path: 'machines', component: machines_component_1.MachinesComponent, data: { title: 'Machines' } }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
exports.routedComponents = [index_component_1.IndexComponent, machines_component_1.MachinesComponent];
//# sourceMappingURL=app.routing.js.map