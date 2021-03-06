import { Body, Controller, Delete, Get, HttpStatus, NotFoundException, Param, Post, Put, Res } from '@nestjs/common';
import { CreateItemDto } from './dto/create-items.dto';
import { Item } from './interfaces/item.interface';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {

    constructor(private readonly itemsService: ItemsService) { }

    @Get()
    async findAll(): Promise<Item[]> {
        return this.itemsService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<Item> {
        return this.itemsService.findOne(id);
    }

    @Post('')
    async addPost(@Res() res, @Body() createItemDto: CreateItemDto): Promise<CreateItemDto> {
        const newPost = await this.itemsService.create(createItemDto);
        return res.status(HttpStatus.OK).json({
            message: 'Post has been submitted successfully!',
            post: newPost,
        });
    }

    @Delete(':id')
    async deleteOne(@Param('id') id: string): Promise<boolean> {
        return await this.itemsService.deleteOne(id);
    }

    @Put(':id')
    updateOne(@Body() updateItemDto: CreateItemDto, @Param('id') id): string {
        return `Update ${id} Name : ${updateItemDto.name}`
    }
}
