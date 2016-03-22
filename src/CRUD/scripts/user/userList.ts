import {Component} from "angular2/core";
import {UserModel} from './UserModel';
import {TemplateUrl} from './../common';
@Component({
    selector: "user-list",
    templateUrl: TemplateUrl("user/templates/user-list.component.html")
})
export class UserList {

}
