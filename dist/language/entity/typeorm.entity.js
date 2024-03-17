"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LanguageEntity = exports.TranslationEntity = void 0;
const typeorm_1 = require("typeorm");
let TranslationEntity = class TranslationEntity {
};
exports.TranslationEntity = TranslationEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ comment: 'Идентификатор' }),
    __metadata("design:type", Number)
], TranslationEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => LanguageEntity),
    (0, typeorm_1.JoinColumn)({ name: 'languageId', referencedColumnName: 'id' }),
    (0, typeorm_1.Column)({ comment: 'Идентификатор языка' }),
    __metadata("design:type", Number)
], TranslationEntity.prototype, "languageId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Идентификатор типа категории',
        type: 'varchar',
        length: 20,
    }),
    __metadata("design:type", String)
], TranslationEntity.prototype, "categoryType", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Текстовое значение',
        type: 'varchar',
        length: 512,
    }),
    __metadata("design:type", String)
], TranslationEntity.prototype, "value", void 0);
exports.TranslationEntity = TranslationEntity = __decorate([
    (0, typeorm_1.Entity)('ozma-translation'),
    (0, typeorm_1.Index)(['languageId', 'categoryType'], { unique: true })
], TranslationEntity);
let LanguageEntity = class LanguageEntity {
};
exports.LanguageEntity = LanguageEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ comment: 'Идентификатор' }),
    __metadata("design:type", Number)
], LanguageEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Имя языка',
        type: 'varchar',
        length: 200,
    }),
    __metadata("design:type", String)
], LanguageEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Аббревиатура языка',
        type: 'varchar',
        length: 5,
    }),
    __metadata("design:type", String)
], LanguageEntity.prototype, "abbreviation", void 0);
exports.LanguageEntity = LanguageEntity = __decorate([
    (0, typeorm_1.Entity)('ozma-language')
], LanguageEntity);
//# sourceMappingURL=typeorm.entity.js.map