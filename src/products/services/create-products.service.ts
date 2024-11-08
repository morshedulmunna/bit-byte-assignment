import { Injectable } from '@nestjs/common';

@Injectable()
export class CreateProductService {
  async createProduct() {
    return 'This action adds a new product';
  }
}
