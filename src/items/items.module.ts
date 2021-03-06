import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsController } from './items.controller';
import { ItemRepository } from './items.repository';
import { ItemsService } from './items.service';
import { Item, ItemSchema } from './schemas/item.schema';


@Module({
    imports: [MongooseModule.forFeature([{ name: Item.name, schema: ItemSchema }])],
    controllers: [ItemsController],
    providers: [ItemsService, ItemRepository],
})
export class ItemsModule { }
