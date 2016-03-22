import {Component} from 'angular2/core';
import {UserList} from "./user/userList";
import {UserProfile} from "./user/userProfile";
import {TemplateUrl} from './common';

@Component({
    selector: 'my-app',
    directives: [UserProfile, UserList],
    templateUrl: TemplateUrl('user-content.component.html')
})
export class AppComponent { }