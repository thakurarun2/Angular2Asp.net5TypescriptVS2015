export class UserModel{
    constructor(
        public id: number,
        public firstName: string,
        public lastName: string,
        public isActive: boolean,
        public sex: string
    ) { }
}