export class AppResponse {
  private data: any;
  private responseCode: number;
  private message: string;
  private error: string;

  constructor(
    data: string,
    responseCode: number,
    message: string,
    error: string
  ) {
    this.data = data;
    this.responseCode = responseCode;
    this.message = message || "Error";
    this.error = error;
  }

  SuccessHandler() {
    return {
      data: this.data,
      code: this.responseCode,
      message: this.message,
    };
  }

  ErrorHandler() {
    return {
      error: this.error,
    };
  }
}
