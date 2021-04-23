import { Client } from "./client";

export class MailClient extends Client {
  onInit(): void {
    return;
  }

  send(message: string): boolean {
    return true;
  }
}
