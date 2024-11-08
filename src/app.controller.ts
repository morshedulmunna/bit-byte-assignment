import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { healthCheckerType } from './type';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): healthCheckerType {
    return this.appService.health();
  }
}
