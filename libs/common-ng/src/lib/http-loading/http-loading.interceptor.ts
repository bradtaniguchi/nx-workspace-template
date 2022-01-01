import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpLoadingStateService } from './http-loading.state.service';

@Injectable({
  providedIn: 'root',
})
export class HttpLoadingInterceptor implements HttpInterceptor {
  constructor(private httpLoadingState: HttpLoadingStateService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap({
        next: (event) =>
          event instanceof HttpResponse &&
          this.httpLoadingState.setLoading(true),
        error: () => this.httpLoadingState.setLoading(false),
        complete: () => this.httpLoadingState.setLoading(false),
      })
    );
  }
}
