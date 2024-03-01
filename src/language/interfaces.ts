import { LanguageModel, TranslationModel } from './entity/sequalize.model';

export interface ILanguageService {
    findAllLanguages(): Promise<LanguageModel[]>;
    findLanguageById(id: number): Promise<LanguageModel>;
    createLanguage(data: { name: string; abbreviation: string }): Promise<LanguageModel>;
    updateLanguage(id: number, data: { name?: string; abbreviation?: string }): Promise<[affectedCount: number]>;
    deleteLanguage(id: number): Promise<void>;
    findAllTranslations(): Promise<TranslationModel[]>;
    findTranslationById(id: number): Promise<TranslationModel>;
    createTranslation(data: { languageId: number; categoryType: string; value: string }): Promise<TranslationModel>;
    updateTranslation(
        id: number,
        data: { languageId?: number; categoryType?: string; value?: string },
    ): Promise<[affectedCount: number]>;
    deleteTranslation(id: number): Promise<void>;
}
