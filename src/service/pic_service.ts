import { PIC_SHEET } from "./sheets";

export type PIC = {
  date: Date;
  name: string;
  status: string;
  title: string;
};

export class PICService {
  static loadNextWeekPIC(): PIC[] {
    const result: PIC[] = [];

    // range settings
    const START_COL = 2;
    const END_COL = 5;
    const START_ROW = 3;
    const END_ROW = 100;

    const cells: string[][] | undefined = PIC_SHEET?.getSheetValues(
      START_ROW,
      START_COL,
      END_ROW,
      END_COL
    );
    if (cells == undefined) {
      return result;
    }

    const today: Date = new Date();
    let date: Date = new Date();
    for (let i = 0; i < END_ROW; i++) {
      const name: string = cells[i][1] || "";
      const title: string = cells[i][3] || "タイトル未定";
      const status: string = cells[i][2] || "未";

      // name is not set
      if (name == "") {
        continue;
      }

      // update date
      date = cells[i][0] ? new Date(cells[i][0]) : date;

      // only next week
      if (status == "終") {
        continue;
      }
      if (status == "未") {
        if ((date.getTime() - today.getTime()) / 86400000 > 7) {
          continue;
        }
      }

      // create person
      const person: PIC = {
        date: date,
        name: name,
        status: status,
        title: title,
      };
      result.push(person);
    }

    return result;
  }
}
