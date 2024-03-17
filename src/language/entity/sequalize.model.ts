import { Table, Column, DataType, PrimaryKey, AutoIncrement, Model, ForeignKey } from 'sequelize-typescript';
import { ILanguage, ITranslation } from '../interfaces';

@Table({
    tableName: 'ozma-translation',
    indexes: [
        {
            unique: true,
            fields: ['languageId', 'categoryType'], // Указываем поля для уникального индекса
        },
    ],
})
export class TranslationModel extends Model<TranslationModel> implements ITranslation {
    @PrimaryKey
    @AutoIncrement
    @Column({
        comment: 'Идентификатор',
        type: DataType.INTEGER,
        allowNull: false,
    })
    id!: number;

    @ForeignKey(() => LanguageModel)
    @Column({
        comment: 'Идентификатор языка',
        type: DataType.INTEGER,
        allowNull: false,
    })
    languageId: number;

    @Column({
        comment: 'Идентификатор типа категории',
        type: DataType.STRING(20),
        allowNull: false,
    })
    categoryType: string;

    @Column({
        comment: 'Текстовое значение',
        type: DataType.STRING(512),
        allowNull: false,
    })
    value: string;
}

@Table({ tableName: 'ozma-language' })
export class LanguageModel extends Model<LanguageModel> implements ILanguage {
    @PrimaryKey
    @AutoIncrement
    @Column({
        comment: 'Идентификатор',
        type: DataType.INTEGER,
        allowNull: false,
    })
    id!: number;

    @Column({
        comment: 'Имя языка',
        type: DataType.STRING(200),
        allowNull: false,
    })
    name: string;

    @Column({
        comment: 'Аббревиатура языка',
        type: DataType.STRING(5),
        allowNull: false,
    })
    abbreviation: string;
}
