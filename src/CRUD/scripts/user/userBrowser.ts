import {Component} from "angular2/core";
import {UserList} from "./userList";
import {UserProfile} from "./userProfile";
@Component({
    selector: 'user-browser',
    directives: [UserList, UserProfile],
    template:''

})
export class UserBrowser {
    constructor() {
       
    }
}
