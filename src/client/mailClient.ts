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
    // yesno dialog
    const question: string = Browser.msgBox(
      "メールを送信しますか？",
      Browser.Buttons.YES_NO_CANCEL
    );

    if (question == "yes") {
      GmailApp.sendEmail(mailTo, subject, message, { name: fromName });
      Browser.msgBox("メールを送信しました");
    }
  }
}
