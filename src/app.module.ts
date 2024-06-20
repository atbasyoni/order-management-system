import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { ProductModule } from './modules/product/product.module';
import { OrderModule } from './modules/order/order.module';
import { CartModule } from './modules/cart/cart.module';
import { CouponModule } from './modules/coupon/coupon.module';

@Module({
  imports: [UserModule, ProductModule, OrderModule, CartModule, CouponModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
