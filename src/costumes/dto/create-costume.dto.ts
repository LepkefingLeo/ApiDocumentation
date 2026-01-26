import { ApiProperty } from "@nestjs/swagger";
import { IsEnum, IsInt, Min, IsNotEmpty, IsString } from "class-validator";
import { Size } from "generated/prisma/enums";

export class CreateCostumeDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'A jelmez fajtája',
    example: 'Darth Vader jelmez'
  })
  name: string;

  /**
  * A jelmez mérete (S/M/L/XL)
  * @example "M"
  */

  @IsEnum(Size)
  @ApiProperty()
  size: Size;

  /**
   * A jelmez készleten lévő darabszáma
   * @example 12
   */

  @IsInt()
  @Min(0)
  @ApiProperty()
  stock: number;
}
