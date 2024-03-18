import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FindOptionsWhere } from 'typeorm/find-options/FindOptionsWhere';
import { TranslationEntity } from '../../entity';
import { ITranslationService } from '../../interfaces';

@Injectable()
export class TranslationTypeormService implements ITranslationService {
    constructor(
        @InjectRepository(TranslationEntity)
        private translationRepository: Repository<TranslationEntity>,
    ) {}

    async findAllTranslations(): Promise<TranslationEntity[]> {
        return this.translationRepository.find();
    }

    async findTranslationById(id: number): Promise<TranslationEntity> {
        return this.translationRepository.findOneBy({ id });
    }

    async findTranslationByFilter(
        filter: FindOptionsWhere<TranslationEntity>[] | FindOptionsWhere<TranslationEntity>,
    ): Promise<TranslationEntity[]> {
        return this.translationRepository.find({
            where: filter,
        });
    }

    async createTranslation(data: {
        languageId: number;
        categoryType: string;
        value: string;
    }): Promise<TranslationEntity> {
        const translation = this.translationRepository.create(data);
        return this.translationRepository.save(translation);
    }

    async updateTranslation(
        id: number,
        data: { languageId?: number; categoryType?: string; value?: string },
    ): Promise<TranslationEntity> {
        const translation = await this.findTranslationById(id);
        this.translationRepository.merge(translation, data);
        await this.translationRepository.save(translation);

        return translation;
    }

    async deleteTranslation(id: number): Promise<void> {
        const translation = await this.findTranslationById(id);
        if (translation) {
            await this.translationRepository.remove(translation);
        }
    }
}
