import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator"

export class UpdateProduct{
    @IsString()
    @IsNotEmpty()
    @ApiProperty({default:'Example Title'})
    title: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty({default:'Example Description'})
    description: string

    @IsString()
    @IsNotEmpty()
    @ApiProperty({default:'Example Category'})
    category: string
    
    // field baru
    @IsNumber()
    @IsOptional()
    @ApiProperty({required: false})
    userId?: number
}