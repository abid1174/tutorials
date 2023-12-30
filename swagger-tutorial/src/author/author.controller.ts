import { Controller, Param } from '@nestjs/common';
import { AuthorService } from './author.service';

@Controller('authors')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  getAuthor(@Param() id: string) {
    return this.authorService.getById(id);
  }
}
