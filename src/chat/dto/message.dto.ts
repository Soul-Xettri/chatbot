import { Type } from 'class-transformer';
import { IsString, IsNotEmpty, IsArray, ValidateNested } from 'class-validator';

class answer {
  @IsNotEmpty()
  @IsString()
  answer: string;
}

export class MessageDto {
  @IsNotEmpty()
  @IsString()
  question: string;

  @IsNotEmpty()
  @IsArray()
  @ValidateNested()
  @Type(() => answer)
  answer: answer[];
}
