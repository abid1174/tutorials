import {
  Injectable,
  InternalServerErrorException,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Author } from './author.schema';
import { Model } from 'mongoose';

@Injectable()
export class AuthorService {
  constructor(@InjectModel(Author.name) private authorModel: Model<Author>) {}

  async getById(authorId: string) {
    try {
      const author = await this.authorModel.findById(authorId);

      if (!author) {
        throw new NotFoundException(`Author not found with id ${authorId}`);
      }

      return author;
    } catch (error) {
      Logger.log(error);
      throw new InternalServerErrorException();
    }
  }
}
