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
exports.TranslationEntity = void 0;
const typeorm_1 = require("typeorm");
const language_entity_1 = require("./language.entity");
let TranslationEntity = class TranslationEntity {
};
exports.TranslationEntity = TranslationEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ comment: 'Идентификатор' }),
    __metadata("design:type", Number)
], TranslationEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => language_entity_1.LanguageEntity),
    (0, typeorm_1.JoinColumn)({ name: 'languageId', referencedColumnName: 'id' }),
    (0, typeorm_1.Column)({ comment: 'Идентификатор языка' }),
    __metadata("design:type", Number)
], TranslationEntity.prototype, "languageId", void 0);
__decorate([
    (0, typeorm_1.Column)({ name: 'elementId', comment: 'Идентификатор элемента' }),
    __metadata("design:type", Number)
], TranslationEntity.prototype, "elementId", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar',
        name: 'fieldName',
        length: 32,
        comment: 'Название поля',
    }),
    __metadata("design:type", String)
], TranslationEntity.prototype, "fieldName", void 0);
__decorate([
    (0, typeorm_1.Column)({
        comment: 'Идентификатор категории',
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
    (0, typeorm_1.Index)(['categoryType', 'elementId', 'languageId', 'fieldName'], { unique: true })
], TranslationEntity);
//# sourceMappingURL=translation.entity.js.map