let idCounter = 0;
export class task {
  constructor(name) {
    this.name = name;
    this.id = ++idCounter;
  }
}
