// sheet index
const HEADER_INDEX = "B3";
const BODY_INDEX = "B10";
const FOOTER_INDEX = "B25";
const PREVIEW_INDEX = "D3";

export class MessageGenerator {
  private message!: string;
  private sheet;

  constructor() {
    const sheetApp = SpreadsheetApp.getActive();
    try {
      this.sheet = sheetApp.getSheetByName("配信管理");
    } catch (e) {
      Browser.msgBox("Cannot find sheet...");
    }

    this.loadTemplate();
  }

  loadTemplate(): void {
    this.clear();

    // header
    this.message += this.sheet?.getRange(HEADER_INDEX).getValue();
    this.message += "\n\n";
    // body
    this.message += this.sheet?.getRange(BODY_INDEX).getValue();
    this.message += "\n\n";
    // footer
    this.message += this.sheet?.getRange(FOOTER_INDEX).getValue();
    this.message += "\n\n";
  }

  preview(): void {
    // プレースホルダーに挿入
    // FIXME: 実装する
    this.message = this.message.replace("${name}", "山田 太郎");
    this.message = this.message.replace("${lt_title}", "サルでもわかるgit入門");

    this.sheet?.getRange(PREVIEW_INDEX).setValue(this.message);
    Browser.msgBox("Successful to generate mail");
  }

  clear(): void {
    this.message = "";
  }

  getMessage(): string {
    return this.message;
  }
}
