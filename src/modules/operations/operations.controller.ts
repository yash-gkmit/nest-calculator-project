import { Controller, Post, Body, Get, Delete, Param, Query, HttpException, HttpStatus } from '@nestjs/common';
import { OperationsService } from './operations.service';
import { CreateOperationDto } from './dto/create-operation.dto';

@Controller('operations')
export class OperationsController {
  constructor(private readonly operationsService: OperationsService) {}

  @Post()
  async computeOperation(@Body() createOperationDto: CreateOperationDto, @Query('email') email: string) {
    if (!email) {
      throw new HttpException('Email query parameter is required', HttpStatus.BAD_REQUEST);
    }
    const result = await this.operationsService.computeOperation(createOperationDto, email);
    return { result };
  }

  @Get()
  async getOperationHistory(@Param('email') email: string) {
    if (!email) {
      throw new HttpException('Email query parameter is required', HttpStatus.BAD_REQUEST);
    }
    return this.operationsService.getOperationHistory(email);
  }

  @Delete(':id')
  async deleteOperationById(@Param('id') id: number) {
    await this.operationsService.deleteOperationById(id);
    return { message: 'Operation deleted successfully' };
  }

  @Delete()
  async clearOperationHistory(@Param('email') email: string) {
    if (!email) {
      throw new HttpException('Email query parameter is required', HttpStatus.BAD_REQUEST);
    }
    await this.operationsService.clearOperationHistory(email);
    return { message: 'Operation history cleared successfully' };
  }
}
