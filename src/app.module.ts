import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HcModule } from './hc/hc.module';

@Module({
  imports: [HcModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
