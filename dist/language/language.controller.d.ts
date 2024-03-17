import { LanguageTypeormService } from './service/language-typeorm.service';
export declare class LanguageController {
    private languageService;
    constructor(languageService: LanguageTypeormService);
    findAll(): Promise<import("./entity/typeorm.entity").LanguageEntity[]>;
    findOne(id: string): Promise<import("./entity/typeorm.entity").LanguageEntity>;
    create(languageData: {
        name: string;
        abbreviation: string;
    }): Promise<import("./entity/typeorm.entity").LanguageEntity>;
    update(id: string, languageData: {
        name?: string;
        abbreviation?: string;
    }): Promise<import("./entity/typeorm.entity").LanguageEntity>;
    delete(id: string): Promise<void>;
}
//# sourceMappingURL=language.controller.d.ts.map