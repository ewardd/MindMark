import { AuthModule } from './auth/auth.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { PagesModule } from './pages/pages.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import configuration, { IConfiguration } from './config/configuration';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'server',
        password: 'server-pwd',
        database: 'mindmark',
        autoLoadEntities: true,
        synchronize: true,
        ...config.get<IConfiguration['database']>('database'),
      }),
      inject: [ConfigService],
    }),
    AuthModule,
    UsersModule,
    PagesModule,
  ],
})
export class AppModule {}
