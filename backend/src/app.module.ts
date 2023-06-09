import { AuthModule } from './auth/auth.module';
import { Module } from '@nestjs/common';
import { PagesModule } from './pages/pages.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'server',
      password: 'server-pwd',
      database: 'mindmark',
      autoLoadEntities: true,
      synchronize: true,
    }),
    AuthModule,
    UsersModule,
    PagesModule,
  ],
})
export class AppModule {}
