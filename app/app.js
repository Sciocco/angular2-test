//import {Component, View, bootstrap} from 'angular2/angular2';
//import {Component, View, bootstrap} from 'angular2/core';
////import {reflect} from 'reflect-metadata';
////import {es6} from 'es6-shim';
////import "reflect-metadata";
//
//@Component({
//    selector: 'my-app',
//    templateUrl: "template/app.html",
//    //template:'<div>fuck world!</div>'
//})
//class MyAppComponent {
//    constructor() {
//    }
//}
//bootstrap(MyAppComponent);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('angular2/core');
var AppComponent = (function () {
    function AppComponent() {
        this.name = 'fucking hight';
        var self = this;
        var t = setTimeout(function () {
            self.startup();
        }, 1000);
    }
    AppComponent.prototype.init = function () {
    };
    AppComponent.prototype.startup = function () {
        console.log("change");
        this.name = "holy hight";
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "<h1>{{name}}</h1>"
        })
    ], AppComponent);
    return AppComponent;
})();
exports.AppComponent = AppComponent;
core_1.bootstrap(AppComponent);
console.log("app-start");
//# sourceMappingURL=app.js.map