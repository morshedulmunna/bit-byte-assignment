// src/swagger.config.ts
import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function setupSwagger(app: INestApplication): void {
  // Swagger setup options
  const config = new DocumentBuilder()
    .setTitle('Bit Byte tech- Product Catalog API Documentation')
    .setDescription('Comprehensive API documentation with Swagger in NestJS.')
    .setVersion('1.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        description: 'Enter JWT token in format: Bearer <token>',
      },
      'JWT-auth', // This is a unique key used to reference the auth scheme in the Swagger documentation
    )
    .setContact(
      'API Support',
      'https://www.linkedin.com/in/morshedulmunna/',
      'morshedulmunna1@gmail.com',
    )
    .addServer('http://localhost:3000')
    .build();

  // Generate the Swagger document
  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api-docs', app, document, {
    customSiteTitle: 'Bit Byte API Documentation - Swagger UI',
    customCss: '.swagger-ui .topbar { display: none }',
  });
}
