import { healthCheckerType } from './type';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  health(): healthCheckerType {
    return {
      message: 'Server is up! health 100% ',
    };
  }
}
