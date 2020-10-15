//Created by: Quân
export class AuthLoginInfo {
    username: string;
    password: string;

    constructor(accountName: string, accountPassword: string) {
        this.username = accountName;
        this.password = accountPassword;
    }
}
