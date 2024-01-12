import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, SchemaTypes } from 'mongoose';
import { Author } from 'src/author/author.schema';

export type AuthorDocument = HydratedDocument<Book>;

@Schema()
export class Book {
  @Prop()
  title: string;

  @Prop()
  description: string;

  @Prop({ type: [String] })
  genres: string[];

  @Prop({ type: Date })
  publishedDate: Date;

  @Prop({ type: SchemaTypes.ObjectId, ref: 'Author', required: true })
  author: Author;
}

export const BookSchema = SchemaFactory.createForClass(Book);
