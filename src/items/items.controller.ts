import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item-dto';

@Controller('items')
export class ItemsController {
    /* This will automatically create an endpoint in http://localhost:3000/items 
    with GET Request*/
    @Get()
    findAll(): string {
        return 'Get all items';
    }

    @Get(':id')
    findOne(@Param('id') id): string {
        return `Item id: ${id}`
    }

    // POST request endpoint
    @Post()
    create(@Body() createItemDto: CreateItemDto): string {
        return `Name: ${createItemDto.name}, Desc: ${createItemDto.description}, qty: ${createItemDto.qty}`
    }

    // Update
    @Put(':id')
    update(@Param('id') id): string {
        return `Item ${id} updated`
    }

    // Delete
    @Delete(':id')
    delete(@Param('id') id): string {
        return `Item ${id} deleted`
    }
}
