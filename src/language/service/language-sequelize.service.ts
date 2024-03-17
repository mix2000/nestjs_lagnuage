import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { LanguageModel, TranslationModel } from '../entity/sequalize.model';
import { ILanguageService } from '../interfaces';

@Injectable()
export class LanguageSequelizeService implements ILanguageService {
    constructor(
        @InjectModel(LanguageModel)
        private languageModel: typeof LanguageModel,
        @InjectModel(TranslationModel)
        private translationModel: typeof TranslationModel,
    ) {}

    // LanguageModel CRUD Operations
    async findAllLanguages(): Promise<LanguageModel[]> {
        return this.languageModel.findAll();
    }

    async findLanguageById(id: number): Promise<LanguageModel> {
        return this.languageModel.findByPk(id);
    }

    async createLanguage(data: { name: string; abbreviation: string }): Promise<LanguageModel> {
        return this.languageModel.create(data);
    }

    async updateLanguage(id: number, data: { name?: string; abbreviation?: string }): Promise<LanguageModel> {
        await this.languageModel.update(data, {
            where: { id },
        });

        const result = await this.findLanguageById(id);

        return result.dataValues;
    }

    async deleteLanguage(id: number): Promise<void> {
        const language = await this.findLanguageById(id);
        if (language) {
            await language.destroy();
        }
    }

    // TranslationModel CRUD Operations
    async findAllTranslations(): Promise<TranslationModel[]> {
        return this.translationModel.findAll();
    }

    async findTranslationById(id: number): Promise<TranslationModel> {
        return this.translationModel.findByPk(id);
    }

    async createTranslation(data: {
        languageId: number;
        categoryType: string;
        value: string;
    }): Promise<TranslationModel> {
        return this.translationModel.create(data);
    }

    async updateTranslation(
        id: number,
        data: { languageId?: number; categoryType?: string; value?: string },
    ): Promise<TranslationModel> {
        await this.translationModel.update(data, {
            where: { id },
        });
        const result = await this.findTranslationById(id);

        return result.dataValues;
    }

    async deleteTranslation(id: number): Promise<void> {
        const translation = await this.findTranslationById(id);
        if (translation) {
            await translation.destroy();
        }
    }
}
