import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface'
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ItemsService {
    constructor(@InjectModel('Item') private readonly itemModel:Model<Item>){}

    // Mongoose return a promise , so we use async await
    // As it is returning promise, we specify return type as Promise<Item[]>
    async findAll(): Promise<Item[]> {
        return await this.itemModel.find();
    }

    // Return Single Item
    async findOne(id: string): Promise<Item> {
        return await this.itemModel.findById(id);
    }

    // Create Item
    async create(item: Item): Promise<Item> {
        const newItem = new this.itemModel(item);
        return await newItem.save();
    }

    // Update Item
    // Takes id and item as parameters
    async update(id: string, item: Item): Promise<Item> {
        return this.itemModel.findByIdAndUpdate(id, item, { new: true }) // {new: true} means if there is not a specified item, it will create a newone
    }

    // Delete Item
    async delete(id: string): Promise<Item> {
        return await this.itemModel.findByIdAndRemove(id)
    }
}
