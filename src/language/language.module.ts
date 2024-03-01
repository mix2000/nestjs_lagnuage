import { DynamicModule, Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { LanguageModel, TranslationModel } from './entity/sequalize.model';
import { LanguageController } from './language.controller';
import { PrismaService } from './service/prisma.service';
import { SequelizeService } from './service/sequelize.service';

interface CrudModuleOptions {
    orm: 'sequelize' | 'prisma';
}

@Module({})
export class LanguageModule {
    static forRoot(options: CrudModuleOptions): DynamicModule {
        const providers = [];

        if (options.orm === 'sequelize') {
            providers.push({
                provide: 'LANGUAGE_SERVICE',
                useClass: SequelizeService,
            });
        } else if (options.orm === 'prisma') {
            providers.push({
                provide: 'LANGUAGE_SERVICE',
                useClass: PrismaService,
            });
        }

        return {
            module: LanguageModule,
            imports: options.orm === 'sequelize' ? [SequelizeModule.forFeature([LanguageModel, TranslationModel])] : [],
            controllers: [LanguageController],
            providers: providers,
        };
    }
}
