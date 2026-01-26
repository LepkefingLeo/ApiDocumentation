import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CostumesService } from './costumes.service';
import { CreateCostumeDto } from './dto/create-costume.dto';
import { UpdateCostumeDto } from './dto/update-costume.dto';
import { CostumeEntity } from './entities/costume.entity';
import { ApiBearerAuth, ApiNotFoundResponse, ApiOkResponse, ApiParam } from '@nestjs/swagger';

@Controller('costumes')
export class CostumesController {
  constructor(private readonly costumesService: CostumesService) {}

  @Post()
  create(@Body() createCostumeDto: CreateCostumeDto) {
    return this.costumesService.create(createCostumeDto);
  }

  @Get()
  @ApiOkResponse({
    description: 'Sikeres lekérdezés',
    type: CostumeEntity,
    isArray: true
  })

  findAll() {
    return this.costumesService.findAll();
  }

  /**
   * 
   * Visszaadja egy jelmez adatait
   */

  @Get(':id')
  @ApiParam({
    name: 'id',
    description: 'A jelmez egyedi ID-ja',
    type: 'number'
  })
  @ApiOkResponse({
    description: 'Sikeres lekérdezés',
    type: CostumeEntity
  })
  @ApiNotFoundResponse({
    description: 'Nincs ilyen ID-jű jelmez'
  })
  findOne(@Param('id') id: string) {
    return this.costumesService.findOne(+id);
  }

  @Patch(':id')
  @ApiBearerAuth()
  update(@Param('id') id: string, @Body() updateCostumeDto: UpdateCostumeDto) {
    return this.costumesService.update(+id, updateCostumeDto);
  }
  
  @Delete(':id')
  @ApiBearerAuth()
  remove(@Param('id') id: string) {
    return this.costumesService.remove(+id);
  }
}
