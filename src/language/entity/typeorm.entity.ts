import { PrimaryGeneratedColumn, Column, Entity, ManyToOne, JoinColumn, Index } from 'typeorm';
import { ILanguage, ITranslation } from '../interfaces';

@Entity('ozma-translation')
@Index(['languageId', 'categoryType'], { unique: true })
export class TranslationEntity implements ITranslation {
    @PrimaryGeneratedColumn({ comment: 'Идентификатор' })
    id!: number;

    @ManyToOne(() => LanguageEntity)
    @JoinColumn({ name: 'languageId', referencedColumnName: 'id' })
    @Column({ comment: 'Идентификатор языка' })
    languageId: number;

    @Column({
        comment: 'Идентификатор типа категории',
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

@Entity('ozma-language')
export class LanguageEntity implements ILanguage {
    @PrimaryGeneratedColumn({ comment: 'Идентификатор' })
    id!: number;

    @Column({
        comment: 'Имя языка',
        type: 'varchar',
        length: 200,
    })
    name: string;

    @Column({
        comment: 'Аббревиатура языка',
        type: 'varchar',
        length: 5,
    })
    abbreviation: string;
}
