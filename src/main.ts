class SpreadDB {}

function myFunction() {
  const SPREADSHEET_ID = "1qeEM1nzJxmdpAMF4MPs5-4FdVP_NZoAmRtQtuF60U3Y";

  const sheets = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = sheets.getSheetByName("Sheet 1");
  const range = sheet.getRange("A1");
  const value = range.getValue();
  return value;
}
