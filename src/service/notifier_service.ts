import { NOTIFIER_SHEET } from "./sheets";

export class NotifierService {
  getMessage(): string {
    let result = "";
    // header
    result += NOTIFIER_SHEET?.getRange("B3").getValue();
    result += "\n\n";
    // body
    result += NOTIFIER_SHEET?.getRange("B10").getValue();
    result += "\n\n";
    // footer
    result += NOTIFIER_SHEET?.getRange("B25").getValue();
    result += "\n\n";

    // プレースホルダーに挿入
    // FIXME: 実装する
    result = result.replace(
      "${pic_list}",
      "　- 山田 太郎『サルでもわかるgit入門』"
    );
    result = result.replace("${delay_list}", "　- 田中 花子：2週間遅れ");

    return result;
  }

  preview(message: string): void {
    NOTIFIER_SHEET?.getRange("D3").setValue(message);
    Browser.msgBox("Successful to generate mail");
  }

  getMailTo(): string {
    // 送信先アドレス
    return NOTIFIER_SHEET?.getRange("F6").getValue() as string;
  }

  getSubject(): string {
    // 件名
    return NOTIFIER_SHEET?.getRange("F3").getValue() as string;
  }

  getFromName(): string {
    // 差出人
    return NOTIFIER_SHEET?.getRange("F9").getValue() as string;
  }
}
