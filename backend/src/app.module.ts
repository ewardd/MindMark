import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

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
    UserModule,
  ],
})
export class AppModule {}
