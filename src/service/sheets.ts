const sheetApp = SpreadsheetApp.getActive();

// sheets
export const NOTIFIER_SHEET = sheetApp.getSheetByName("配信管理");
export const PIC_SHEET = sheetApp.getSheetByName("名簿管理");
export const DELAY_SHEET = sheetApp.getSheetByName("遅延状況");

// sheets ID
const NOTIFIER_SHEET_ID: string = NOTIFIER_SHEET?.getSheetId().toString() || "";
const PIC_SHEET_ID: string = PIC_SHEET?.getSheetId().toString() || "";
const DELAY_SHEET_ID: string = DELAY_SHEET?.getSheetId().toString() || "";

// sheets URL
const SHEET_URL = sheetApp.getUrl();
export const NOTIFIER_SHEET_URL = `${SHEET_URL}#gid=${NOTIFIER_SHEET_ID}`;
export const PIC_SHEET_URL = `${SHEET_URL}#gid=${PIC_SHEET_ID}`;
export const DELAY_SHEET_URL = `${SHEET_URL}#gid=${DELAY_SHEET_ID}`;
