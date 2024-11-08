import { Controller, Get, Post } from '@nestjs/common';
import { CreateProductService } from './services/create-products.service';
import { GetProductService } from './services/get-product.service';

@Controller('products')
export class ProductsController {
  constructor(
    private readonly createProductService: CreateProductService,
    private readonly getProductService: GetProductService,
  ) {}
  @Post()
  getHello(): any {
    return this.createProductService.createProduct();
  }
}
