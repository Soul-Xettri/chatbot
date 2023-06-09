import {
  Injectable,
  NotFoundException,
  ForbiddenException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { MessageDto } from './dto/message.dto';

@Injectable()
export class ChatService {
  constructor(private prisma: PrismaService) {}

  async createQuestion(dto: MessageDto) {
    const find = await this.prisma.message.findFirst({});
    if (find.question === dto.question) {
      throw new ForbiddenException('Question already exist');
    }
    const question = await this.prisma.message.create({
      data: {
        question: dto.question,
        answer: {
          create: dto.answer,
        },
      },
      include: {
        answer: true,
      },
    });
    return question;
  }

  async getResponse(dto: MessageDto) {
    const response = await this.prisma.message.findFirst({
      where: {
        question: dto.question,
      },
      select: {
        answer: true,
      },
    });
    return response;
  }
}
