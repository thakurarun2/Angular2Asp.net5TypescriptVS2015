import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {NgForm}    from 'angular2/common';
import {UserModel} from './UserModel';
import {TemplateUrl} from './../common';
@Component({
    selector: "user-profile",
    templateUrl: TemplateUrl("user/templates/user-form.component.html")
})
export class UserProfile {
    model: UserModel;
    sexList: Array<string>;
    @Output() addUser: EventEmitter<UserModel> = new EventEmitter();
    constructor() {
        this.model = new UserModel(0, '', '', true, 'Male');
        this.sexList = ['Female','Male','Not Decided'];
    }
    onSubmit(event: any) {
        //here i want to update the list in just one click.
        //question is how to do that ?
    }
    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model) }
}