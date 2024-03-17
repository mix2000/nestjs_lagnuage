import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LanguageEntity, TranslationEntity } from './entity/typeorm.entity';
import { LanguageController } from './language.controller';
import { LanguageTypeormService } from './service/language-typeorm.service';

@Module({
    imports: [TypeOrmModule.forFeature([LanguageEntity, TranslationEntity])],
    controllers: [LanguageController],
    providers: [LanguageTypeormService],
    exports: [LanguageTypeormService],
})
export class LanguageModule {}
