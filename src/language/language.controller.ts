import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { LanguageTypeormService } from './service/language-typeorm.service';

@Controller('languages')
export class LanguageController {
    constructor(private languageService: LanguageTypeormService) {}

    @Get()
    async findAll() {
        return this.languageService.findAllLanguages();
    }

    @Get(':id')
    async findOne(@Param('id') id: string) {
        return this.languageService.findLanguageById(+id);
    }

    @Post()
    async create(@Body() languageData: { name: string; abbreviation: string }) {
        return this.languageService.createLanguage(languageData);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() languageData: { name?: string; abbreviation?: string }) {
        return this.languageService.updateLanguage(+id, languageData);
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        return this.languageService.deleteLanguage(+id);
    }
}
