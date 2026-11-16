import { Injectable } from '@nestjs/common';

@Injectable()
export class HcService {
  check() {
    return {
      status: 'Healthy',
    };
  }
}
