function assert(condition: boolean, message: string) {
  if (!condition) {
    throw new Error(message);
  }
}

class Table {
  private db: SpreadDB;
  private sheet: GoogleAppsScript.Spreadsheet.Sheet;

  constructor(sheet: GoogleAppsScript.Spreadsheet.Sheet) {
    this.sheet = sheet;
  }
}

class SpreadDB {
  private spreadsheet: GoogleAppsScript.Spreadsheet.Spreadsheet;

  private constructor(spreadsheet: GoogleAppsScript.Spreadsheet.Spreadsheet) {
    this.spreadsheet = spreadsheet;
  }

  public static openById(id: string): SpreadDB {
    return new SpreadDB(SpreadsheetApp.openById(id));
  }

  public static openByUrl(url: string): SpreadDB {
    return new SpreadDB(SpreadsheetApp.openByUrl(url));
  }

  public getTable(name: string): Table {
    const sheet = this.spreadsheet.getSheetByName(name);
    assert(sheet != null, `Table ${name} not found`);
    return new Table(sheet);
  }
}
