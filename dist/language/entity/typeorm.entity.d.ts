import { ILanguage, ITranslation } from '../interfaces';
export declare class TranslationEntity implements ITranslation {
    id: number;
    languageId: number;
    categoryType: string;
    value: string;
}
export declare class LanguageEntity implements ILanguage {
    id: number;
    name: string;
    abbreviation: string;
}
//# sourceMappingURL=typeorm.entity.d.ts.map