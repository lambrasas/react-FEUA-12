export class UserModel {
  constructor(user) {
    this.id = user.id;
    this.name = user.name;
    this.email = user.email;
    this.address = user.address;
    this.company = user.company;
  }
}
