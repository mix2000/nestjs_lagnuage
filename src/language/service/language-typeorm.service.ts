import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FindOptionsWhere } from 'typeorm/find-options/FindOptionsWhere';
import { LanguageEntity, TranslationEntity } from '../entity/typeorm.entity';
import { ILanguageService } from '../interfaces';

@Injectable()
export class LanguageTypeormService implements ILanguageService {
    constructor(
        @InjectRepository(LanguageEntity)
        private languageRepository: Repository<LanguageEntity>,
        @InjectRepository(TranslationEntity)
        private translationRepository: Repository<TranslationEntity>,
    ) {}

    // LanguageEntity CRUD Operations
    async findAllLanguages(): Promise<LanguageEntity[]> {
        return this.languageRepository.find();
    }

    async findLanguageById(id: number): Promise<LanguageEntity> {
        return this.languageRepository.findOneBy({ id });
    }

    async createLanguage(data: { name: string; abbreviation: string }): Promise<LanguageEntity> {
        const language = this.languageRepository.create(data);
        return this.languageRepository.save(language);
    }

    async updateLanguage(id: number, data: { name?: string; abbreviation?: string }): Promise<LanguageEntity> {
        const language = await this.findLanguageById(id);
        this.languageRepository.merge(language, data);
        await this.languageRepository.save(language);

        return language;
    }

    async deleteLanguage(id: number): Promise<void> {
        const language = await this.findLanguageById(id);
        if (language) {
            await this.languageRepository.remove(language);
        }
    }

    // TranslationEntity CRUD Operations
    async findAllTranslations(): Promise<TranslationEntity[]> {
        return this.translationRepository.find();
    }

    async findTranslationById(id: number): Promise<TranslationEntity> {
        return this.translationRepository.findOneBy({ id });
    }

    async findTranslationByFilter(
        filter: FindOptionsWhere<TranslationEntity>[] | FindOptionsWhere<TranslationEntity>,
    ): Promise<TranslationEntity[]> {
        return this.translationRepository.find({
            where: filter,
        });
    }

    async createTranslation(data: {
        languageId: number;
        categoryType: string;
        value: string;
    }): Promise<TranslationEntity> {
        const translation = this.translationRepository.create(data);
        return this.translationRepository.save(translation);
    }

    async updateTranslation(
        id: number,
        data: { languageId?: number; categoryType?: string; value?: string },
    ): Promise<TranslationEntity> {
        const translation = await this.findTranslationById(id);
        this.translationRepository.merge(translation, data);
        await this.translationRepository.save(translation);

        return translation;
    }

    async deleteTranslation(id: number): Promise<void> {
        const translation = await this.findTranslationById(id);
        if (translation) {
            await this.translationRepository.remove(translation);
        }
    }
}
