import { Controller, Get, Post, Put, Delete, Body } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item-dto';

@Controller('items')
export class ItemsController {
    /* This will automatically create an endpoint in http://localhost:3000/items 
    with GET Request*/
    @Get()
    findAll(): string {
        return 'Get all items';
    }

    // POST request endpoint
    @Post()
    create(@Body() createItemDto: CreateItemDto): string {
        return `Name: ${createItemDto.name}, Desc: ${createItemDto.description}, qty: ${createItemDto.qty}`
    }
}
