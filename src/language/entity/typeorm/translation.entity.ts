import { Column, Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ITranslation } from '../../interfaces';
import { LanguageEntity } from './language.entity';

@Entity('ozma-translation')
@Index(['categoryType', 'elementId', 'languageId', 'fieldName'], { unique: true })
export class TranslationEntity implements ITranslation {
    @PrimaryGeneratedColumn({ comment: 'Идентификатор' })
    id!: number;

    @ManyToOne(() => LanguageEntity)
    @JoinColumn({ name: 'languageId', referencedColumnName: 'id' })
    @Column({ comment: 'Идентификатор языка' })
    languageId: number;

    @Column({ name: 'elementId', comment: 'Идентификатор элемента' })
    elementId: number;

    @Column({
        type: 'varchar',
        name: 'fieldName',
        length: 32,
        comment: 'Название поля',
    })
    fieldName: string;

    @Column({
        comment: 'Идентификатор категории',
        type: 'varchar',
        length: 20,
    })
    categoryType: string;

    @Column({
        comment: 'Текстовое значение',
        type: 'varchar',
        length: 512,
    })
    value: string;
}
