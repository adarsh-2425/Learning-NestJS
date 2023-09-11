import { Controller, Get, Post } from '@nestjs/common';

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
    create(): string {
        return 'Create Item lol';
    }
}
