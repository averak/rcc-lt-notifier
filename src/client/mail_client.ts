export class MailClient {
  constructor() {
    return;
  }

  send(
    mailTo: string,
    subject: string,
    fromName: string,
    message: string
  ): void {
    GmailApp.sendEmail(mailTo, subject, message, { name: fromName });
    Browser.msgBox("Successful to send mail");
  }
}
