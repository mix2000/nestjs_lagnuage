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
exports.LanguageEntity = void 0;
const typeorm_1 = require("typeorm");
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
//# sourceMappingURL=language.entity.js.map