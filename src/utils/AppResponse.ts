export class AppResponse {
  private data: any;
  private responseCode: number;
  private message: string;

  constructor(data: string, responseCode: number, message: string) {
    this.data = data;
    this.responseCode = responseCode;
    this.message = message || "Error";
  }

  ResponseHandler() {
    return {
      data: this.data,
      code: this.responseCode,
      message: this.message,
    };
  }
}
