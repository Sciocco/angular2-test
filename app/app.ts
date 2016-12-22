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


import { Component,bootstrap } from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `<h1>{{name}}</h1>`
})
export class AppComponent {
    name = 'fucking hight';
    constructor() {
        var self = this;
        var t = setTimeout(function(){
            self.startup()
        },1000);

    }
    private init():void
    {

    }
    public startup():void
    {
        console.log("change");
        this.name = "holy hight";
    }
}
bootstrap(AppComponent);

console.log("app-start");