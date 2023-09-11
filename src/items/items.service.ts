import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface'

@Injectable()
export class ItemsService {
    private readonly items: Item[] = [
        {
            id: "2323232",
            name: "Samsung Galaxy 1",
            description: "item one",
            qty: 100
        },
        {
            id: "4343",
            name: "Samsung Galaxy 2",
            description: "item two",
            qty: 50
        }
    ];

    findAll(): Item[] {
        return this.items;
    }
}
