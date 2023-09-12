import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item-dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface'

@Controller('items')
export class ItemsController {

    constructor(private readonly itemsService: ItemsService) {}

    
    @Get() // Handles HTTP GET requests to '/items'
    findAll(): Promise<Item[]> {
        return this.itemsService.findAll(); // Return items. Retrieving is written in findAll method in service file
    }

    @Get(':id')
    findOne(@Param('id') id): Promise<Item> {
        return this.itemsService.findOne(id);
    }

    // POST request endpoint
    @Post()
    create(@Body() createItemDto: CreateItemDto): Promise<Item> {
        return this.itemsService.create(createItemDto)
    }

    // Update
    @Put(':id')
    update(@Body() updateItemDto: CreateItemDto, @Param('id') id): Promise<Item> {
        return this.itemsService.update(id, updateItemDto)
    }

    // Delete
    @Delete(':id')
    delete(@Param('id') id): Promise<Item> {
        return this.itemsService.delete(id);
    }
}
