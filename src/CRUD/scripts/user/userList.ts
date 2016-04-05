import {Component, Input, Output, EventEmitter} from "angular2/core";
import {UserModel} from './UserModel';
import {TemplateUrl} from './../common';
@Component({
    selector: "user-list",
    templateUrl: TemplateUrl("user/templates/user-list.component.html")
})
export class UserList {
    //what we are doing here..
    //input is, what is required for this component and output is what will be out sourced.
    @Input() users: UserModel[];
    @Input() selectedUser: UserModel;
    @Output() selectionChange: EventEmitter<UserModel> = new EventEmitter();
}
