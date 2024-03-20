import { FindOptionsWhere } from 'typeorm/find-options/FindOptionsWhere';
import { TranslationEntity } from './entity';

export interface ILanguage {
    id: number;
    name: string;
    abbreviation: string;
}

export interface ITranslation {
    id: number;
    languageId: number;
    fieldName: string;
    elementId: number;
    categoryType: string;
    value: string;
}

export interface ILanguageService {
    findLanguagesByFilter(filter: FindOptionsWhere<ILanguage>[] | FindOptionsWhere<ILanguage>): Promise<ILanguage[]>;
    findAllLanguages(): Promise<ILanguage[]>;
    findLanguageById(id: number): Promise<ILanguage>;
    createLanguage(data: { name: string; abbreviation: string }): Promise<ILanguage>;
    updateLanguage(id: number, data: { name?: string; abbreviation?: string }): Promise<ILanguage>;
    deleteLanguage(id: number): Promise<void>;
}

export interface ITranslationService {
    findTranslationByFilter(
        filter: FindOptionsWhere<TranslationEntity>[] | FindOptionsWhere<TranslationEntity>,
    ): Promise<TranslationEntity[]>;
    findAllTranslations(): Promise<ITranslation[]>;
    findTranslationById(id: number): Promise<ITranslation>;
    createTranslation(data: { languageId: number; categoryType: string; value: string }): Promise<ITranslation>;
    updateTranslation(
        id: number,
        data: { languageId?: number; categoryType?: string; value?: string },
    ): Promise<ITranslation>;
    deleteTranslation(id: number): Promise<void>;
}
