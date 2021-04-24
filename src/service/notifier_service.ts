import { NOTIFIER_SHEET, PIC_SHEET_URL, DELAY_SHEET_URL } from "./sheets";
import { PIC, PICService } from "./pic_service";

export class NotifierService {
  // メール本文
  static getMessage(): string {
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

    const today: Date = new Date();
    const picList: PIC[] = PICService.loadNextWeekPIC();
    let picListMessage = "";
    let delayListMessage = "";
    picList.forEach((pic) => {
      // person in charge
      if (pic.status == "未") {
        picListMessage += `  - ${pic.name}『${pic.title}』\n`;
      }
      // delay
      if (pic.status == "延") {
        // number of delayed week
        const nWeek: number = Math.ceil(
          (today.getTime() - pic.date.getTime()) / 86400000 / 7
        );
        delayListMessage += `  - ${pic.name}：${nWeek}週遅れ\n`;
      }
    });
    // insert to placeholder
    result = result.replace("${pic_list}\n", picListMessage);
    result = result.replace("${delay_list}\n", delayListMessage);
    result = result.replace("${pic_sheet_url}", PIC_SHEET_URL);
    result = result.replace("${delay_sheet_url}", DELAY_SHEET_URL);

    return result;
  }

  // 送信先アドレス
  static getMailTo(): string {
    return NOTIFIER_SHEET?.getRange("F6").getValue() as string;
  }

  // 件名
  static getSubject(): string {
    return NOTIFIER_SHEET?.getRange("F3").getValue() as string;
  }

  // 差出人
  static getFromName(): string {
    return NOTIFIER_SHEET?.getRange("F9").getValue() as string;
  }

  // プレビュー
  static preview(message: string): void {
    NOTIFIER_SHEET?.getRange("D3").setValue(message);
    Browser.msgBox("プレビューを生成しました");
  }

  // 最終送信日を記録
  static setFinalSendTime(): void {
    const today: Date = new Date();
    NOTIFIER_SHEET?.getRange("F12").setValue(today);
  }
}
