import { Controller, Get, Post, Body, Param, Put, Delete, Inject } from '@nestjs/common';
import { ILanguageService } from './interfaces';

@Controller('languages')
export class LanguageController {
    constructor(@Inject('LANGUAGE_SERVICE') private languageService: ILanguageService) {}

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
