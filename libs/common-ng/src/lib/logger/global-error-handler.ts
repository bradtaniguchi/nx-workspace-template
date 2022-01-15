import { ErrorHandler, Injectable } from '@angular/core';
import { NgLoggerService } from './ng-logger.service';

@Injectable()
export class GlobalErrorHandler implements ErrorHandler {
  constructor(private logger: NgLoggerService) {}

  handleError(err: unknown) {
    this.logger.error(err);
  }
}
