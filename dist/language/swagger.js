"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwaggerDeleteLanguage = exports.SwaggerUpdateLanguage = exports.SwaggerCreateLanguage = exports.SwaggerFindLanguageById = exports.SwaggerFindAllLanguages = void 0;
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
function SwaggerFindAllLanguages() {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiOperation)({ summary: 'Получить все языки' }), (0, swagger_1.ApiResponse)({ status: 200, description: 'Успешный ответ' }));
}
exports.SwaggerFindAllLanguages = SwaggerFindAllLanguages;
function SwaggerFindLanguageById() {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiOperation)({ summary: 'Получить язык по id' }), (0, swagger_1.ApiParam)({ name: 'id', type: String, description: 'Идентификатор языка' }), (0, swagger_1.ApiResponse)({ status: 200, description: 'Успешный ответ' }), (0, swagger_1.ApiResponse)({ status: 404, description: 'Язык не найден' }));
}
exports.SwaggerFindLanguageById = SwaggerFindLanguageById;
function SwaggerCreateLanguage() {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiOperation)({ summary: 'Создать новый язык' }), (0, swagger_1.ApiBody)({ type: Object, description: 'Язык' }), (0, swagger_1.ApiResponse)({ status: 201, description: 'Создан новый язык' }));
}
exports.SwaggerCreateLanguage = SwaggerCreateLanguage;
function SwaggerUpdateLanguage() {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiOperation)({ summary: 'Update an existing language' }), (0, swagger_1.ApiParam)({ name: 'id', type: String, description: 'Идентификатор языка' }), (0, swagger_1.ApiBody)({ type: Object, description: 'Язык' }), (0, swagger_1.ApiResponse)({ status: 200, description: 'Язык обновлен' }));
}
exports.SwaggerUpdateLanguage = SwaggerUpdateLanguage;
function SwaggerDeleteLanguage() {
    return (0, common_1.applyDecorators)((0, swagger_1.ApiOperation)({ summary: 'Удалить язык' }), (0, swagger_1.ApiParam)({ name: 'id', type: String, description: 'Идентификатор языка' }), (0, swagger_1.ApiResponse)({ status: 200, description: 'Язык удален' }));
}
exports.SwaggerDeleteLanguage = SwaggerDeleteLanguage;
//# sourceMappingURL=swagger.js.map