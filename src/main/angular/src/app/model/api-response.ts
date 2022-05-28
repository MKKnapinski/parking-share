export class ApiResponse {
  timeStamp?: Date;
  statusCode: number = 400;
  status?: number;
  reason?: string;
  message?: string;
  devMessage?: string;
  data?: unknown;
}
