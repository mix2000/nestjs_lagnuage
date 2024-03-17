import { Repository } from 'typeorm';
import { LanguageEntity, TranslationEntity } from '../entity/typeorm.entity';
import { ILanguageService } from '../interfaces';
export declare class LanguageTypeormService implements ILanguageService {
    private languageRepository;
    private translationRepository;
    constructor(languageRepository: Repository<LanguageEntity>, translationRepository: Repository<TranslationEntity>);
    findAllLanguages(): Promise<LanguageEntity[]>;
    findLanguageById(id: number): Promise<LanguageEntity>;
    createLanguage(data: {
        name: string;
        abbreviation: string;
    }): Promise<LanguageEntity>;
    updateLanguage(id: number, data: {
        name?: string;
        abbreviation?: string;
    }): Promise<LanguageEntity>;
    deleteLanguage(id: number): Promise<void>;
    findAllTranslations(): Promise<TranslationEntity[]>;
    findTranslationById(id: number): Promise<TranslationEntity>;
    createTranslation(data: {
        languageId: number;
        categoryType: string;
        value: string;
    }): Promise<TranslationEntity>;
    updateTranslation(id: number, data: {
        languageId?: number;
        categoryType?: string;
        value?: string;
    }): Promise<TranslationEntity>;
    deleteTranslation(id: number): Promise<void>;
}
//# sourceMappingURL=language-typeorm.service.d.ts.map