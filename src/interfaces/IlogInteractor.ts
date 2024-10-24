export interface ILogInteractor {
  getAllLogs(limit: number, offset: number);
  getOneLog(id: number);
}
