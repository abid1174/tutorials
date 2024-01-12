import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaTypes } from 'mongoose';
import { Book } from 'src/book/book.schema';

export type AuthorDocument = HydratedDocument<Author>;

@Schema()
export class Author {
  @Prop()
  name: string;

  @Prop()
  bio: string;

  @Prop({ type: Date })
  birthDate: Date;

  @Prop({ type: [SchemaTypes.ObjectId], ref: 'Theme' })
  booksWritten: Book[];
}

export const AuthorSchema = SchemaFactory.createForClass(Author);
