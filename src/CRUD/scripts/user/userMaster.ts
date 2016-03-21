import {Component} from "angular2/core";
import {UserList} from "./userList";
import {UserProfile} from "./userProfile";
@Component({
    directives: [UserList, UserProfile]
})
export class UserControl { }
