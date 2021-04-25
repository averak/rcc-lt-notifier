import { DELAY_SHEET } from "./sheets";
import { PIC, PICService } from "./picService";

export class DelayService {
  static updateBoard(): void {
    // range settings
    const START_COL = 5;
    const MAX_DATA_NUM = 23;

    const PICList: PIC[] = PICService.loadNextWeekPIC();

    // clear board
    for (let i = 0; i < MAX_DATA_NUM; i += 2) {
      DELAY_SHEET?.getRange(START_COL + i, 4).setValue("");
      DELAY_SHEET?.getRange(START_COL + i, 6).setValue("");
      DELAY_SHEET?.getRange(START_COL + i, 7).setValue("");
    }

    // update board
    let count = 0;
    for (let i = 0; i < PICList.length; i++) {
      if (PICList[i].status == "延") {
        // set name
        DELAY_SHEET?.getRange(START_COL + count, 4).setValue(PICList[i].name);
        // set date
        DELAY_SHEET?.getRange(START_COL + count, 6).setValue(PICList[i].date);
        // set title
        DELAY_SHEET?.getRange(START_COL + count, 7).setValue(PICList[i].title);

        count += 2;
      }
    }
  }
}
