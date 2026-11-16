import { Test, TestingModule } from '@nestjs/testing';
import { HcController } from './hc.controller';
import { HcService } from './hc.service';

describe('hc service', () => {
  let hcController: HcController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HcController],
      providers: [HcService],
    }).compile();

    hcController = app.get<HcController>(HcController);
  })

  it('should return status: "Healthy"', async () => {
    await expect(hcController.check()).resolves.toMatchObject({
      status: 'Healthy',
    });
  });
});
