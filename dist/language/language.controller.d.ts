import { ILanguage } from './interfaces';
import { LanguageTypeormService } from './service';
export declare class LanguageController {
    private languageService;
    constructor(languageService: LanguageTypeormService);
    findAll(): Promise<ILanguage[]>;
    findOne(id: string): Promise<ILanguage>;
    create(languageData: {
        name: string;
        abbreviation: string;
    }): Promise<ILanguage>;
    update(id: string, languageData: {
        name?: string;
        abbreviation?: string;
    }): Promise<import("./entity").LanguageEntity>;
    delete(id: string): Promise<void>;
}
//# sourceMappingURL=language.controller.d.ts.map