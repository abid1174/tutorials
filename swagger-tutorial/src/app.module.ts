import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorModule } from './author/author.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    AuthorModule,
    MongooseModule.forRoot('mongodb://localhost:27017/swagger-tutorial'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
