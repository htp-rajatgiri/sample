import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateItemDto } from './dto/create-items.dto';
import { ItemRepository } from './items.repository';
import { Item } from './schemas/item.schema';

@Injectable()
export class ItemsService {

    constructor(
        private readonly repository: ItemRepository
    ) { }

    async create(createItemDto: CreateItemDto): Promise<Item> {
        return this.repository.create(createItemDto);
    }

    async findAll(): Promise<Item[]> {
        return this.repository.findAll();
    }

    async findOne(postId: string): Promise<Item> {
        const post = await this.repository.findOne(postId);
        if (post === undefined || post === null) {
            throw new BadRequestException('No record found');
        }
        return post;
    }

    async deleteOne(postId: string): Promise<any> {
        const deletedPost = await this.repository.deleteOne(postId);
        console.log(postId);
        if (deletedPost.deletedCount > 0) {
            return true
        } else {
            return false;
        }
    }

    // findOne(id): Item {
    //     const data = this.item.find(item => item.id === id);
    //     if (data === undefined || data === null) {
    //         throw new BadRequestException('No record found');
    //     }
    //     return data;
    // }
}
