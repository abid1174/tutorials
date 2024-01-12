import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorModule } from './author/author.module';
import { MongooseModule } from '@nestjs/mongoose';
import { BookModule } from './book/book.module';

@Module({
  imports: [
    AuthorModule,
    BookModule,
    MongooseModule.forRoot('mongodb://localhost:27017/swagger-tutorial'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
