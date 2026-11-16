import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class HcService {
  check() {
    Logger.log('HC');
    return {
      status: 'Healthy',
    };
  }
}
