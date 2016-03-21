import {Component} from 'angular2/core';
//import {UserControl} from './user/userMaster';
import {UserProfile} from './user/userProfile';
@Component({
    selector: 'my-app',
    directives: [ UserProfile],
    template: 'My First custom component like <user-profile></user-profile>'
})
export class AppComponent { }