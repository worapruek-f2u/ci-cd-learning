import { Injectable } from '@nestjs/common';

@Injectable()
export class HcService {
  async check() {
    return {
      status: 'Healthy',
    };
  };
}
