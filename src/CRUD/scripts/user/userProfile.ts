import {Component} from 'angular2/core';
import {Common} from './../common';
@Component({
    selector: "user-profile",
    templateUrl: Common.Template.GetUrl("user/templates/user-form.component.html")
})
export class UserProfile { }