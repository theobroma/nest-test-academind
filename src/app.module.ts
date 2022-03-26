import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    ProductsModule,
    MongooseModule.forRoot(
      'mongodb+srv://theobroma:<password>@cluster0.ax7qh.gcp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
      // 'mongodb+srv://maximilian:B3dqPzooRLzFiVYm@cluster0-ntrwp.mongodb.net/nestjs-demo?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
