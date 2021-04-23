const sheetApp = SpreadsheetApp.getActive();

// sheets
export const NOTIFIER_SHEET = sheetApp.getSheetByName("配信管理");
export const PIC_SHEET = sheetApp.getSheetByName("名簿管理");
export const DELAY_SHEET = sheetApp.getSheetByName("遅延状況");
