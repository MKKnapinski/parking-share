import {HttpStatusCode} from '@angular/common/http';

export interface Response {
  timeStamp: Date;
  statusCode: number;
  status: HttpStatusCode;
  reason: string;
  message: string;
  devMessage: string;
  data: Map<string, string>;
}
