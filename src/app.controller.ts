import { Body, Controller, Delete, Get, Post, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateTransactionDTO } from './dto/create-transaction.dto';

@Controller('/app/transaction')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/')
  async createTransaction(@Body() data: CreateTransactionDTO) {
    const createdTransaction = await this.appService.createTransaction(data);
    return createdTransaction;
  }
  @Get('/')
  async listAll() {
    const transactions = await this.appService.listAll();
    return transactions;
  }

  @Post('/:id')
  async updateTransaction(
    @Body() data: CreateTransactionDTO,
    @Param('id') id: string,
  ) {
    const transaction = await this.appService.updateTransaction(id, data);
    return transaction;
  }

  @Delete('/:id')
  async deleteTransaction(@Param('id') id: string) {
    const transaction = await this.appService.deleteTransaction(id);
    return transaction;
  }
}
