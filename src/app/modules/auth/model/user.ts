export class NbUser {
  constructor(
    public id?: number,
    public username?: string,
    public password?: string,
    public rememberMe?: string,
    public terms?: string,
    public confirmPassword?: string,
    public fullName?: string
  ) {
  }
}
