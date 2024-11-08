import { ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.getOrThrow('DATABASE_HOST'),
        port: configService.getOrThrow('DATABASE_PORT'),
        password: configService.getOrThrow('DATABASE_PASS'),
        username: configService.getOrThrow('DATABASE_USER'),
        entities: [],
        database: configService.getOrThrow('DATABASE_DATABASE'),
        synchronize: true,
        logging: true,
      }),
      inject: [ConfigService],
    }),
  ],
})
// eslint-disable-next-line prettier/prettier
export class PostgresConfigModule {}
