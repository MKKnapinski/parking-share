import {HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {plainToInstance} from 'class-transformer';
import {ApiResponse} from '../model/api-response';
import {Injectable} from '@angular/core';
import {MessageService} from 'primeng/api';

@Injectable()
export class APICallInterceptor implements HttpInterceptor {

  constructor(private messageService: MessageService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    return next.handle(request)
      .pipe(
        map(event => {
          if (event instanceof HttpResponse && !event.url?.includes('assets')) {
            return event.clone({body: this.handleHttpResponse(event)});
          }
          return event;
        })
      );
  }

  private handleHttpResponse(event: HttpResponse<any>): any {
    const apiResponse = plainToInstance(ApiResponse, event.body as ApiResponse);
    debugger;
    if (!apiResponse) {
      throw new Error('Failed to parse api response');
    }

    if (apiResponse.statusCode < 400) {
      if (apiResponse.message) {
        this.messageService.add({severity: 'success', summary: 'Success', key: 'HTTPInterceptor', detail: apiResponse.message});
      }
      return apiResponse.data;
    }

    if (apiResponse.statusCode >= 400) {
      this.messageService.add({severity: 'error', summary: 'Error', key: 'HTTPInterceptor', detail: apiResponse.message ?? 'Unexpected error occurred.'});
    }

  }

}
