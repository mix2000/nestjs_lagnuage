import { Repository } from 'typeorm';
import { FindOptionsWhere } from 'typeorm/find-options/FindOptionsWhere';
import { TranslationEntity } from '../../entity';
import { ITranslationService } from '../../interfaces';
export declare class TranslationTypeormService implements ITranslationService {
    private translationRepository;
    constructor(translationRepository: Repository<TranslationEntity>);
    findAllTranslations(): Promise<TranslationEntity[]>;
    findTranslationById(id: number): Promise<TranslationEntity>;
    findTranslationByFilter(filter: FindOptionsWhere<TranslationEntity>[] | FindOptionsWhere<TranslationEntity>): Promise<TranslationEntity[]>;
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
//# sourceMappingURL=translation-typeorm.service.d.ts.map