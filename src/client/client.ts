export abstract class Client {
  constructor() {
    this.onInit();
  }

  abstract onInit(): void;

  abstract send(message: string): boolean;
}
