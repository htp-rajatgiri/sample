import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ItemDocument = Item & Document;
export const ITEM_COLLECTION_NAME = "items";

@Schema({ collection: ITEM_COLLECTION_NAME })
export class Item {
    @Prop()
    id: string;

    @Prop()
    name: string;

    @Prop()
    qty: number;

    @Prop()
    description: string;
}

export const ItemSchema = SchemaFactory.createForClass(Item);