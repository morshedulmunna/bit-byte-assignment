import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { CreateProductService } from './services/create-products.service';
import { GetProductService } from './services/get-product.service';

@Module({
  controllers: [ProductsController],
  providers: [CreateProductService, GetProductService],
})
export class ProductsModule {}
