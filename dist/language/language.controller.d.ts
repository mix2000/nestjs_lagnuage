import { LanguageTypeormService } from './service';
export declare class LanguageController {
    private languageService;
    constructor(languageService: LanguageTypeormService);
    findAll(): Promise<import("./entity").LanguageEntity[]>;
    findOne(id: string): Promise<import("./entity").LanguageEntity>;
    create(languageData: {
        name: string;
        abbreviation: string;
    }): Promise<import("./entity").LanguageEntity>;
    update(id: string, languageData: {
        name?: string;
        abbreviation?: string;
    }): Promise<import("./entity").LanguageEntity>;
    delete(id: string): Promise<void>;
}
//# sourceMappingURL=language.controller.d.ts.map