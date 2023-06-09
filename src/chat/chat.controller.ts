import { Controller, Post, Get, Body } from '@nestjs/common';
import { ChatService } from './chat.service';
import { MessageDto } from './dto/message.dto';

@Controller('chat')
export class ChatController {
  constructor(private readonly chartService: ChatService) {}

  @Post()
  createQuestion(@Body() dto: MessageDto) {
    return this.chartService.createQuestion(dto);
  }

  @Get()
  getResponse(@Body() dto: MessageDto) {
    return this.chartService.getResponse(dto);
  }
}
