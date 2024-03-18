import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LanguageEntity, TranslationEntity } from './entity';
import { LanguageController } from './language.controller';
import { LanguageTypeormService, TranslationTypeormService } from './service';

@Module({
    imports: [TypeOrmModule.forFeature([LanguageEntity, TranslationEntity])],
    controllers: [LanguageController],
    providers: [LanguageTypeormService, TranslationTypeormService],
    exports: [LanguageTypeormService, TranslationTypeormService],
})
export class LanguageModule {}
