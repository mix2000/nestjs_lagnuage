import { DynamicModule, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LanguageModel, TranslationModel } from './entity/sequalize.model';
import { LanguageEntity, TranslationEntity } from './entity/typeorm.entity';
import { LanguageController } from './language.controller';
import { LanguagePrismaService } from './service/language-prisma.service';
import { LanguageSequelizeService } from './service/language-sequelize.service';
import { LanguageTypeormService } from './service/language-typeorm.service';

interface CrudModuleOptions {
    orm: 'sequelize' | 'prisma' | 'typeorm';
}

@Module({})
export class LanguageModule {
    static forRoot(options: CrudModuleOptions): DynamicModule {
        const providers = [];

        if (options.orm === 'sequelize') {
            providers.push({
                provide: 'LANGUAGE_SERVICE',
                useClass: LanguageSequelizeService,
            });
        } else if (options.orm === 'prisma') {
            providers.push({
                provide: 'LANGUAGE_SERVICE',
                useClass: LanguagePrismaService,
            });
        } else if (options.orm === 'typeorm') {
            providers.push({
                provide: 'LANGUAGE_SERVICE',
                useClass: LanguageTypeormService,
            });
        }

        return {
            module: LanguageModule,
            imports:
                options.orm === 'sequelize'
                    ? [SequelizeModule.forFeature([LanguageModel, TranslationModel])]
                    : options.orm === 'typeorm'
                      ? [TypeOrmModule.forFeature([LanguageEntity, TranslationEntity])]
                      : [],
            controllers: [LanguageController],
            providers: providers,
            exports: providers,
        };
    }
}
