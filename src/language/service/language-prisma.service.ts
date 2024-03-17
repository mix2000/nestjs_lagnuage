import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ILanguageService } from '../interfaces';

@Injectable()
export class LanguagePrismaService extends PrismaClient implements OnModuleInit, OnModuleDestroy, ILanguageService {
    async onModuleInit() {
        await this.$connect();
    }

    async onModuleDestroy() {
        await this.$disconnect();
    }

    // Language CRUD Operations
    async findAllLanguages() {
        return this.language.findMany();
    }

    async findLanguageById(id: number) {
        return this.language.findUnique({
            where: { id },
        });
    }

    async createLanguage(data: { name: string; abbreviation: string }) {
        return this.language.create({
            data,
        });
    }

    async updateLanguage(id: number, data: { name?: string; abbreviation?: string }) {
        return this.language.update({
            where: { id },
            data,
        });
    }

    async deleteLanguage(id: number) {
        return this.language.delete({
            where: { id },
        });
    }

    // Translation CRUD Operations
    async findAllTranslations() {
        return this.translation.findMany();
    }

    async findTranslationById(id: number) {
        return this.translation.findUnique({
            where: { id },
        });
    }

    async createTranslation(data: { languageId: number; categoryType: string; value: string }) {
        return this.translation.create({
            data,
        });
    }

    async updateTranslation(id: number, data: { languageId?: number; categoryType?: string; value?: string }) {
        return this.translation.update({
            where: { id },
            data,
        });
    }

    async deleteTranslation(id: number) {
        return this.translation.delete({
            where: { id },
        });
    }
}
