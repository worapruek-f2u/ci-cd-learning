import { Controller, Get } from '@nestjs/common';
import { HcService } from './hc.service';

@Controller()
export class HcController {
  constructor(private readonly service: HcService) {}

  @Get('/hc')
  async check() {
    return this.service.check();
  }
}
