import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AttendanceDocument = Att & Document;

@Schema({collection: "attendance"})
export class Att {
    @Prop()
    name: string;

    @Prop()
    roll_no: number;

    @Prop()
    attendance: number;

    @Prop()
    percentage: number;
}

export const AttSchema = SchemaFactory.createForClass(Att);