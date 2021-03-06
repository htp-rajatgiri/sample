import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateItemDto } from "./dto/create-items.dto";
import { Item, ItemDocument } from './schemas/item.schema';

@Injectable()
export class ItemRepository {
    constructor(
        @InjectModel(Item.name) private itemModel: Model<ItemDocument>
    ) { }

    async create(createItemDto: CreateItemDto): Promise<Item> {
        const createdItem = new this.itemModel(createItemDto);
        return createdItem.save();
    }

    async findAll(): Promise<Item[]> {
        return this.itemModel.find().exec();
    }

    async findOne(postId: string): Promise<Item> {
        return this.itemModel
            .findById(postId)
            .exec();
    }

    async deleteOne(postId: string): Promise<any> {
        return await this.itemModel.deleteOne({ _id: postId });
    }

}