var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var UserModel_1 = require('./UserModel');
var common_1 = require('./../common');
var UserProfile = (function () {
    function UserProfile() {
        this.addUser = new core_1.EventEmitter();
        this.model = new UserModel_1.UserModel(0, '', '', true, 'Male');
        this.sexList = ['Female', 'Male', 'Not Decided'];
    }
    UserProfile.prototype.onSubmit = function (event) {
        //here i want to update the list in just one click.
        //question is how to do that ?
    };
    Object.defineProperty(UserProfile.prototype, "diagnostic", {
        // TODO: Remove this when we're done
        get: function () { return JSON.stringify(this.model); },
        enumerable: true,
        configurable: true
    });
    __decorate([
        core_1.Output(), 
        __metadata('design:type', core_1.EventEmitter)
    ], UserProfile.prototype, "addUser", void 0);
    UserProfile = __decorate([
        core_1.Component({
            selector: "user-profile",
            templateUrl: common_1.TemplateUrl("user/templates/user-form.component.html")
        }), 
        __metadata('design:paramtypes', [])
    ], UserProfile);
    return UserProfile;
})();
exports.UserProfile = UserProfile;
//# sourceMappingURL=userProfile.js.map