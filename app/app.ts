//import {Component, View, bootstrap} from 'angular2/angular2';
import {Component, View, bootstrap} from 'angular2/core';

@Component({
    selector: 'my-app',
    templateUrl: "template/app.html",
    //template:'<div>fuck world!</div>'
})

class MyAppComponent {
    constructor() {
    }
}
bootstrap(MyAppComponent);

console.log("app-start");