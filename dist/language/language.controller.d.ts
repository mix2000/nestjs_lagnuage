import { LanguageTypeormService } from './service/language-typeorm.service';
export declare class LanguageController {
    private languageService;
    constructor(languageService: LanguageTypeormService);
    findAll(): Promise<import("..").LanguageEntity[]>;
    findOne(id: string): Promise<import("..").LanguageEntity>;
    create(languageData: {
        name: string;
        abbreviation: string;
    }): Promise<import("..").LanguageEntity>;
    update(id: string, languageData: {
        name?: string;
        abbreviation?: string;
    }): Promise<import("..").LanguageEntity>;
    delete(id: string): Promise<void>;
}
//# sourceMappingURL=language.controller.d.ts.map