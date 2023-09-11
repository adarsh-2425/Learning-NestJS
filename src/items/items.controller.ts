import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item-dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface'

@Controller('items')
export class ItemsController {

    constructor(private readonly itemsService: ItemsService) {}

    /* This will automatically create an endpoint in http://localhost:3000/items 
    with GET Request*/
    @Get()
    findAll(): Item[] {
        return this.itemsService.findAll(); // Return items. Retrieving is written in findAll method in service file
    }

    @Get(':id')
    findOne(@Param('id') id): Item {
        return this.itemsService.findOne(id);
    }

    // POST request endpoint
    @Post()
    create(@Body() createItemDto: CreateItemDto): string {
        return `Name: ${createItemDto.name}, Desc: ${createItemDto.description}, qty: ${createItemDto.qty}`
    }

    // Update
    @Put(':id')
    update(@Body() updateItemDto: CreateItemDto, @Param('id') id): string {
        return `UPdate ${id} - Name: ${updateItemDto.name}, Desc: ${updateItemDto.description}, Qty: ${updateItemDto.qty}`
    }

    // Delete
    @Delete(':id')
    delete(@Param('id') id): string {
        return `Item ${id} deleted`
    }
}
