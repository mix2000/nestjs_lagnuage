import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ILanguage } from '../../interfaces';

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
