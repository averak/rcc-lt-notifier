import { Client } from "./client";

export class MailClient extends Client {
  onInit(): void {
    return;
  }

  send(message: string): void {
    Browser.msgBox("Successful to send mail");
  }
}
