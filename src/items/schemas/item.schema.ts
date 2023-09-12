import * as mongoose from 'mongoose'; // * means all

export const ItemSchema = new mongoose.Schema({
    name: String,
    description: String,
    qty: Number
});