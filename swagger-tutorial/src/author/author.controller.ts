import { Controller, Get, Param } from '@nestjs/common';
import { AuthorService } from './author.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('authors')
@ApiTags('Authors')
export class AuthorController {
  constructor(private readonly authorService: AuthorService) {}

  @Get()
  getAuthor(@Param() id: string) {
    return this.authorService.getById(id);
  }
}
